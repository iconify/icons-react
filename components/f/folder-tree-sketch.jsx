import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l6j_xaccc.css';
import '../../css/m/mn1bpcbjl.css';
import '../../css/z/z3y7eccgc.css';
import '../../css/k/kcrlnd2mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l6j_xaccc"/><path class="mn1bpcbjl wm-a"/><path class="wm-k z3y7eccgc"/><path class="kcrlnd2mp wm-a"/></g>`,
		"fallback": "withicons:folder-tree-sketch",
	});
}

export default Component;
