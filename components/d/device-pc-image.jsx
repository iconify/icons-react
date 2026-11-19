import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dbn7r2b_e.css';
import '../../css/q/qzqymy0za.css';
import '../../css/q/qtq5x3s7v.css';
import '../../css/b/bpc-esnpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dbn7r2b_e"/><path class="qzqymy0za"/><path class="qtq5x3s7v"/><path class="bpc-esnpg"/></g>`,
		"fallback": "andrsrxn:device-pc-image",
	});
}

export default Component;
