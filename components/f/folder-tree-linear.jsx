import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lyoovxudk.css';
import '../../css/l/lnct-eb9z.css';
import '../../css/k/k-oml3pvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lyoovxudk"/><path class="lnct-eb9z"/><path class="k-oml3pvi"/></g>`,
		"fallback": "solar:folder-tree-linear",
	});
}

export default Component;
