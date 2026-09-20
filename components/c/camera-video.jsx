import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fca4z16-h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fca4z16-h"/>`,
		"fallback": "streamline:camera-video",
	});
}

export default Component;
