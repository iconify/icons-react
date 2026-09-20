import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hs2onrbwl.css';
import '../../css/r/rto9b3bej.css';
import '../../css/p/p19-94b7n.css';
import '../../css/k/k4e5nxrxf.css';
import '../../css/p/p6t9lib_w.css';
import '../../css/b/b-vegzntq.css';
import '../../css/a/auzun6bdf.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBaUzgbqw" x1="0" x2="120" y1="0" y2="120" gradientUnits="userSpaceOnUse"><stop offset="0%" class="hs2onrbwl"/><stop offset="100%" class="rto9b3bej"/></linearGradient></defs><rect fill="url(#SVGBaUzgbqw)" class="p19-94b7n"/><rect class="k4e5nxrxf"/><rect class="p6t9lib_w"/><rect class="b-vegzntq"/><rect class="auzun6bdf"/></g>`,
		"fallback": "thesvg-color:filagram-dark",
	});
}

export default Component;
