import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kwbel-b_g.css';
import '../../css/d/du9wco7gb.css';
import '../../css/y/y3it9jeju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kwbel-b_g"/><path class="du9wco7gb"/><path class="y3it9jeju"/></g>`,
		"fallback": "hugeicons:folder-lock",
	});
}

export default Component;
