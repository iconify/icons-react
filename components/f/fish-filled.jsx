import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hli0nqqef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hli0nqqef"/>`,
		"fallback": "tdesign:fish-filled",
	});
}

export default Component;
