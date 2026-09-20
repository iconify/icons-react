import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/eb_--tf4u.css';
import '../../css/m/mwyer5i6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="eb_--tf4u"/><path class="mwyer5i6b"/></g>`,
		"fallback": "solar:cloud-sun-broken",
	});
}

export default Component;
