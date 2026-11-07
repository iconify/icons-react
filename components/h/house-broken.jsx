import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/u/u2bgohdzx.css';
import '../../css/c/cugumcbbj.css';
import '../../css/q/qmsms8bjm.css';
import '../../css/d/dzimeordr.css';
import '../../css/s/s1y-dje8y.css';
import '../../css/m/mzdmjcc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="u2bgohdzx"/><path class="cugumcbbj"/><path class="qmsms8bjm"/><path class="dzimeordr"/><path class="s1y-dje8y"/><path class="mzdmjcc3w"/></g>`,
		"fallback": "solar:house-broken",
	});
}

export default Component;
