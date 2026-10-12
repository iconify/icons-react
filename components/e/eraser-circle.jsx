import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4k067hwe.css';
import '../../css/l/l_ece5g_q.css';
import '../../css/y/y9o9hxb5k.css';
import '../../css/x/xo0nbcbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i4k067hwe"/><path class="l_ece5g_q"/><path class="y9o9hxb5k"/><path class="xo0nbcbpb"/></g>`,
		"fallback": "andrsrxn:eraser-circle",
	});
}

export default Component;
