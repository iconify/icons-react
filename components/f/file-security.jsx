import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m8vg93bvx.css';
import '../../css/k/k6k1rhb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m8vg93bvx"/><path class="k6k1rhb5g"/></g>`,
		"fallback": "hugeicons:file-security",
	});
}

export default Component;
