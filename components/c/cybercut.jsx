import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d9plwlb2q.css';
import '../../css/t/t_ev7s-sv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="d9plwlb2q"/><path class="t_ev7s-sv"/></g>`,
		"fallback": "thesvg:cybercut",
	});
}

export default Component;
