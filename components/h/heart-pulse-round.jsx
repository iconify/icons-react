import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpi0bvd3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpi0bvd3u"/>`,
		"fallback": "coolicons:heart-pulse-round",
	});
}

export default Component;
