import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4e8929wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4e8929wl"/>`,
		"fallback": "pixelarticons:fill-half",
	});
}

export default Component;
