import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erv8lsb7t.css';
import '../../css/y/yjzzdacgp.css';
import '../../css/l/lwt_iac-p.css';
import '../../css/k/kdfjbbcou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="erv8lsb7t"/><path class="yjzzdacgp"/><path class="lwt_iac-p"/><path class="kdfjbbcou"/></g>`,
		"fallback": "andrsrxn:hand-drag-right",
	});
}

export default Component;
