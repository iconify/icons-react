import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryc_9ybce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryc_9ybce"/>`,
		"fallback": "pixelarticons:file-multiple",
	});
}

export default Component;
