import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl_l48dcr.css';
import '../../css/i/i74_vybpn.css';
import '../../css/s/s4wnabblk.css';
import '../../css/m/m_ral-b9y.css';
import '../../css/l/lqd97id1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-rule="evenodd" class="bl_l48dcr"><path class="i74_vybpn"/><path class="s4wnabblk"/></g><circle class="m_ral-b9y"/><circle class="lqd97id1k"/></g>`,
		"fallback": "andrsrxn:blend",
	});
}

export default Component;
