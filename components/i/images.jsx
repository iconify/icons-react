import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qq639u7od.css';
import '../../css/w/wvq029b3i.css';
import '../../css/y/yc00cybjo.css';
import '../../css/q/q_27gd2rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qq639u7od"/><path class="wvq029b3i"/><path class="yc00cybjo"/><path class="q_27gd2rx"/></g>`,
		"fallback": "hugeicons:images",
	});
}

export default Component;
