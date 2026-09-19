import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s0tc8kbql.css';
import '../../css/y/y2ld3wb2v.css';
import '../../css/n/nko_tql4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s0tc8kbql"/><path class="y2ld3wb2v"/><path class="nko_tql4q"/></g>`,
		"fallback": "hugeicons:chat-preview",
	});
}

export default Component;
