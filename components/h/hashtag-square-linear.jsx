import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/spo4lsrxb.css';
import '../../css/q/qzz1y5j1i.css';
import '../../css/m/mv-pxdb7h.css';
import '../../css/d/dh-0v0bfa.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="spo4lsrxb"/><path class="qzz1y5j1i"/><path class="mv-pxdb7h"/><path class="dh-0v0bfa"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:hashtag-square-linear",
	});
}

export default Component;
