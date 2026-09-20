import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f36zf__4f.css';
import '../../css/b/b48qn4bse.css';
import '../../css/b/bup41hc1n.css';
import '../../css/h/hjq1ervwo.css';
import '../../css/q/qk-b8h59k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f36zf__4f"/><path class="b48qn4bse"/><path class="bup41hc1n"/><path class="hjq1ervwo"/><path class="qk-b8h59k"/></g>`,
		"fallback": "streamline-ultimate-color:crypto-currency-bitcoin-laptop",
	});
}

export default Component;
