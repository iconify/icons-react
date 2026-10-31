import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k4ohqtb3i.css';
import '../../css/k/kdumxq53v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k4ohqtb3i"/><path class="kdumxq53v"/></g>`,
		"fallback": "withicons-retro:corner-down-left",
	});
}

export default Component;
