import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx-4nmbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx-4nmbtx"/>`,
		"fallback": "uil:equal-circle",
	});
}

export default Component;
