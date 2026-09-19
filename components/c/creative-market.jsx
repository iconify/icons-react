import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cbu65tf2h.css';
import '../../css/a/a4dn3nbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cbu65tf2h"/><path class="a4dn3nbkb"/></g>`,
		"fallback": "hugeicons:creative-market",
	});
}

export default Component;
