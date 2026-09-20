import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6vb44bwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6vb44bwa"/>`,
		"fallback": "pixelarticons:calendar-week",
	});
}

export default Component;
