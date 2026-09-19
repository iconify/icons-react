import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sq-22o1-z.css';
import '../../css/u/uzhuqjbwo.css';
import '../../css/q/q3ovgr7pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sq-22o1-z"/><path class="uzhuqjbwo"/><path class="q3ovgr7pw"/></g>`,
		"fallback": "hugeicons:cherry",
	});
}

export default Component;
