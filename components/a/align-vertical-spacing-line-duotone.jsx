import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/ql8wzqa2k.css';
import '../../css/f/fd7_frbmd.css';
import '../../css/q/qv_d-ebdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ql8wzqa2k"/><path class="fd7_frbmd"/><path class="qv_d-ebdy"/></g>`,
		"fallback": "solar:align-vertical-spacing-line-duotone",
	});
}

export default Component;
