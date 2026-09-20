import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dezabzb6f.css';
import '../../css/u/unlx30bij.css';
import '../../css/k/k-oml3pvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dezabzb6f"/><path class="unlx30bij"/><path class="k-oml3pvi"/></g>`,
		"fallback": "solar:folder-tree-broken",
	});
}

export default Component;
