import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wojb86weh.css';
import '../../css/d/dnap0tbuj.css';
import '../../css/b/bx_cywb5v.css';
import '../../css/x/xvis5sbxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wojb86weh"/><path class="dnap0tbuj"/><path class="bx_cywb5v"/><path class="xvis5sbxb"/></g>`,
		"fallback": "solar:folder-kanban-linear",
	});
}

export default Component;
