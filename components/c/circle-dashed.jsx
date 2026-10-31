import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cqxzlebpi.css';
import '../../css/x/xy_ch3bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cqxzlebpi"/><path class="xy_ch3bbg"/></g>`,
		"fallback": "withicons-retro:circle-dashed",
	});
}

export default Component;
