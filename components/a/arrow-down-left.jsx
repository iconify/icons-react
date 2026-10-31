import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e3t2sobce.css';
import '../../css/n/nlo08ibom.css';
import '../../css/z/zv2-gsb_v.css';
import '../../css/h/h6zwpzppo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="e3t2sobce wm-shadow"/><path class="nlo08ibom wm-shadow"/><path class="zv2-gsb_v"/><path class="h6zwpzppo"/></g>`,
		"fallback": "withicons-brutal:arrow-down-left",
	});
}

export default Component;
