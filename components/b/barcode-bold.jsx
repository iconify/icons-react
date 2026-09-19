import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij0tqe5xr.css';
import '../../css/l/lkrcecczm.css';
import '../../css/z/z_03rybdh.css';
import '../../css/l/l6bxjdb1y.css';
import '../../css/x/xwd0u6bje.css';
import '../../css/q/qh1n49a3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij0tqe5xr"><rect class="lkrcecczm"/><rect class="z_03rybdh"/><rect class="l6bxjdb1y"/><rect class="xwd0u6bje"/><rect class="qh1n49a3s"/></g>`,
		"fallback": "glyphs:barcode-bold",
	});
}

export default Component;
