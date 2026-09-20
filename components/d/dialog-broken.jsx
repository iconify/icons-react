import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c2m5upb1f.css';
import '../../css/r/rumgkrbdt.css';
import '../../css/y/ye66fobzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c2m5upb1f"/><path class="rumgkrbdt"/><path class="ye66fobzo"/></g>`,
		"fallback": "solar:dialog-broken",
	});
}

export default Component;
