import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e1fv3fbya.css';
import '../../css/s/sph_xqb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e1fv3fbya"/><path class="sph_xqb4o"/></g>`,
		"fallback": "hugeicons:comment-01",
	});
}

export default Component;
