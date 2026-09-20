import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyq91rbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyq91rbfb"/>`,
		"fallback": "pixelarticons:device-laptop",
	});
}

export default Component;
