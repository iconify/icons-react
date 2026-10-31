import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/a/abhqr8-ro.css';
import '../../css/v/vbpj6wbng.css';
import '../../css/q/qoptlrdbx.css';
import '../../css/n/njrlcxb-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG2TxrwduA" x1="9" x2="15" y1="2" y2="21.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG2TxrwduA)" class="abhqr8-ro"/><path class="vbpj6wbng wm-shine"/><path class="qoptlrdbx wm-shine"/><path class="njrlcxb-u wm-shine"/></g>`,
		"fallback": "withicons-utsav:ghost",
	});
}

export default Component;
