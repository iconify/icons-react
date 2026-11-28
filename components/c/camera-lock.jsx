import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehl-jxdfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehl-jxdfw"/>`,
		"fallback": "noviair-light:camera-lock",
	});
}

export default Component;
