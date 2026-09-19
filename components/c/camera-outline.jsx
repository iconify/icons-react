import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmrsxwynv.css';
import '../../css/h/h4au9l6mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmrsxwynv"/><path class="h4au9l6mg"/>`,
		"fallback": "eva:camera-outline",
	});
}

export default Component;
