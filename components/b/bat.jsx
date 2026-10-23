import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lq82r8ber.css';
import '../../css/q/q725rxjsb.css';
import '../../css/z/zd5r3hb3k.css';
import '../../css/r/r44ibcclq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lq82r8ber"/><path class="q725rxjsb"/><path class="zd5r3hb3k"/><path class="r44ibcclq"/></g>`,
		"fallback": "andrsrxn:bat",
	});
}

export default Component;
