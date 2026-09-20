import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o9dmu8blt.css';
import '../../css/g/grb0q__0e.css';
import '../../css/l/lyi2etljr.css';
import '../../css/e/ejdkgccas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o9dmu8blt"/><path class="grb0q__0e"/><path class="lyi2etljr"/><path class="ejdkgccas"/></g>`,
		"fallback": "solar:chat-square-call-broken",
	});
}

export default Component;
