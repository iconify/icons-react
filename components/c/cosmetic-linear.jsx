import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ngrd8yb3c.css';
import '../../css/d/d4vocib6k.css';
import '../../css/p/pmf__vb6m.css';
import '../../css/w/wj1odio5f.css';
import '../../css/z/z37iwiaad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ngrd8yb3c"/><path class="d4vocib6k"/><path class="pmf__vb6m"/><path class="wj1odio5f"/><path class="z37iwiaad"/></g>`,
		"fallback": "solar:cosmetic-linear",
	});
}

export default Component;
