import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/d/de9gu_b1y.css';
import '../../css/z/z4jhrz2uf.css';
import '../../css/c/cs_1o3bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><circle class="de9gu_b1y"/><path class="z4jhrz2uf"/><path class="cs_1o3bol"/></g>`,
		"fallback": "solar:gallery-round-linear",
	});
}

export default Component;
