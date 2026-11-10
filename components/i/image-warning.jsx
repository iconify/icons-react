import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c48iep45y.css';
import '../../css/p/pid1occzj.css';
import '../../css/t/tfg5epb5m.css';
import '../../css/k/kl4cpil0e.css';
import '../../css/z/zapwtgb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c48iep45y"/><path class="pid1occzj"/><path class="tfg5epb5m"/><path class="kl4cpil0e"/><path class="zapwtgb_o"/></g>`,
		"fallback": "andrsrxn:image-warning",
	});
}

export default Component;
