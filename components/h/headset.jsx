import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/ruj7-actu.css';
import '../../css/c/czr0h0u1g.css';
import '../../css/x/xq2s-olke.css';
import '../../css/k/khx_ucboz.css';
import '../../css/u/u4f5wcb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ruj7-actu wm-shadow"/><path class="czr0h0u1g wm-shadow"/><path class="xq2s-olke"/><path class="khx_ucboz"/><path class="u4f5wcb8n"/></g>`,
		"fallback": "withicons-brutal:headset",
	});
}

export default Component;
