import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n-la1r_pz.css';
import '../../css/k/k7bf7us5u.css';
import '../../css/l/l7tubublb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n-la1r_pz"/><path class="k7bf7us5u"/><path class="l7tubublb"/></g>`,
		"fallback": "hugeicons:horizontal-resize",
	});
}

export default Component;
