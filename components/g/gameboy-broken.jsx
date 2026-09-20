import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xs3pxobcu.css';
import '../../css/k/kssj5tb7x.css';
import '../../css/m/m7y6msb9c.css';
import '../../css/i/ixis8j2zi.css';
import '../../css/h/hkzwun7yv.css';
import '../../css/b/b8_i36bih.css';
import '../../css/l/lkjawhb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xs3pxobcu"/><path class="kssj5tb7x"/><path class="m7y6msb9c"/><path class="ixis8j2zi"/><path class="hkzwun7yv"/><path class="b8_i36bih"/><path class="lkjawhb3k"/></g>`,
		"fallback": "solar:gameboy-broken",
	});
}

export default Component;
