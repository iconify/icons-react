import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/r/ri8dfobqd.css';
import '../../css/c/cugumcbbj.css';
import '../../css/q/qmsms8bjm.css';
import '../../css/z/z5zog32ca.css';
import '../../css/i/i-2prw66f.css';
import '../../css/m/mzdmjcc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="ri8dfobqd"/><path class="cugumcbbj"/><path class="qmsms8bjm"/><path class="z5zog32ca"/><path class="i-2prw66f"/><path class="mzdmjcc3w"/></g>`,
		"fallback": "solar:house-linear",
	});
}

export default Component;
