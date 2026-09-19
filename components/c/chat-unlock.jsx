import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s0tc8kbql.css';
import '../../css/g/g0bachb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s0tc8kbql"/><path class="g0bachb2x"/></g>`,
		"fallback": "hugeicons:chat-unlock",
	});
}

export default Component;
