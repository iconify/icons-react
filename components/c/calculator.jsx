import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf2n2obov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf2n2obov"/>`,
		"fallback": "pixelarticons:calculator",
	});
}

export default Component;
