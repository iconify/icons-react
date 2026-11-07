import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/p9h4jybmo.css';
import '../../css/f/fdi87hbgw.css';
import '../../css/u/urwe8bb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="p9h4jybmo"/><path class="fdi87hbgw"/><path class="urwe8bb9z"/></g>`,
		"fallback": "solar:close-broken",
	});
}

export default Component;
