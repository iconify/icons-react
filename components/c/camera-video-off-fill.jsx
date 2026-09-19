import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqsyxlugg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqsyxlugg"/>`,
		"fallback": "bi:camera-video-off-fill",
	});
}

export default Component;
