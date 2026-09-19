import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kymg-qb4w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kymg-qb4w"/>`,
		"fallback": "bi:camera-video-fill",
	});
}

export default Component;
