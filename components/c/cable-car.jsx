import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ary2b4lnc.css';
import '../../css/k/k_isoy1xt.css';
import '../../css/y/ytr9bcb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ary2b4lnc"/><path class="k_isoy1xt"/><path class="ytr9bcb0t"/></g>`,
		"fallback": "hugeicons:cable-car",
	});
}

export default Component;
