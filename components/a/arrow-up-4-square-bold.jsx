import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/k/kmbnwacfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="vkur1dxhw"/><path class="kmbnwacfx"/></g>`,
		"fallback": "iconamoon:arrow-up-4-square-bold",
	});
}

export default Component;
