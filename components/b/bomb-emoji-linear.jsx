import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/m8po4lb0y.css';
import '../../css/d/dg7kedy1c.css';
import '../../css/u/ux6s2nbnw.css';
import '../../css/w/ws_nvmbfy.css';
import '../../css/k/k0xylug1p.css';
import '../../css/t/tsz6qlbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="m8po4lb0y"/><path class="dg7kedy1c"/><path class="ux6s2nbnw"/><path class="ws_nvmbfy"/><path class="k0xylug1p"/><ellipse class="tsz6qlbio"/></g>`,
		"fallback": "solar:bomb-emoji-linear",
	});
}

export default Component;
