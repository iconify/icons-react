import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/d/dg7kedy1c.css';
import '../../css/k/k0xylug1p.css';
import '../../css/t/tsz6qlbio.css';
import '../../css/u/ux6s2nbnw.css';
import '../../css/i/i0i01-blm.css';
import '../../css/d/dbjjifdbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="dg7kedy1c"/><path class="k0xylug1p"/><ellipse class="tsz6qlbio"/><path class="ux6s2nbnw"/><path class="i0i01-blm"/><path class="dbjjifdbs"/></g>`,
		"fallback": "solar:bomb-emoji-broken",
	});
}

export default Component;
