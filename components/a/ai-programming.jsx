import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ffr29_hhx.css';
import '../../css/d/dg7qrmb6g.css';
import '../../css/u/umbt3k8ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ffr29_hhx"/><path class="dg7qrmb6g"/><path class="umbt3k8ug"/></g>`,
		"fallback": "hugeicons:ai-programming",
	});
}

export default Component;
