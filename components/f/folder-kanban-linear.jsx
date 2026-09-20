import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v21qiwb4s.css';
import '../../css/s/s59rn4bzl.css';
import '../../css/b/bx_cywb5v.css';
import '../../css/v/vniimhb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v21qiwb4s"/><path class="s59rn4bzl"/><path class="bx_cywb5v"/><path class="vniimhb_p"/></g>`,
		"fallback": "solar:folder-kanban-linear",
	});
}

export default Component;
