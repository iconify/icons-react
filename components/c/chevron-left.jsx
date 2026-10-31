import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y2i2jiqtg.css';
import '../../css/x/xt1nejbou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y2i2jiqtg"/><path class="xt1nejbou"/></g>`,
		"fallback": "withicons-retro:chevron-left",
	});
}

export default Component;
