import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am8x09bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="am8x09bsk"/>`,
		"fallback": "tdesign:chart-add",
	});
}

export default Component;
