import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvbm_mbsg.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvbm_mbsg"/>`,
		"fallback": "fa6-brands:hacker-news-square",
	});
}

export default Component;
