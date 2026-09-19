import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u78g_1byh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u78g_1byh"/>`,
		"fallback": "fa7-brands:dailymotion",
	});
}

export default Component;
