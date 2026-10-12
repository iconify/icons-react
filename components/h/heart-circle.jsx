import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-az_vbuz.css';
import '../../css/z/ze92cpb2t.css';
import '../../css/s/syzq55b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j-az_vbuz"/><circle transform="rotate(90 12 12)" class="ze92cpb2t"/><path class="syzq55b5o"/></g>`,
		"fallback": "andrsrxn:heart-circle",
	});
}

export default Component;
