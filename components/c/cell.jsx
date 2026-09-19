import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnpipi1wn.css';
import '../../css/k/k8ldz2z3e.css';
import '../../css/y/yxoqvs3bi.css';
import '../../css/q/qnz-s-hbf.css';
import '../../css/c/c3mtq3vxr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dnpipi1wn"><path class="k8ldz2z3e"/><path clip-rule="evenodd" class="yxoqvs3bi"/><path class="qnz-s-hbf"/><path class="c3mtq3vxr"/></g>`,
		"fallback": "icon-park-outline:cell",
	});
}

export default Component;
