import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cz7cm1p3d.css';
import '../../css/w/w48o_g6he.css';
import '../../css/m/m3_k9abbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cz7cm1p3d"/><path class="w48o_g6he"/><path class="m3_k9abbo"/></g>`,
		"fallback": "solar:dialog-2-linear",
	});
}

export default Component;
