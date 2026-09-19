import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/v/vkur1dxhw.css';
import '../../css/v/v8n-ezbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="vkur1dxhw"/><path class="v8n-ezbzx"/></g>`,
		"fallback": "iconamoon:arrow-right-4-square-bold",
	});
}

export default Component;
