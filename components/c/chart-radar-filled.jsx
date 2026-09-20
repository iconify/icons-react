import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g98d97sgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g98d97sgy"/>`,
		"fallback": "tdesign:chart-radar-filled",
	});
}

export default Component;
