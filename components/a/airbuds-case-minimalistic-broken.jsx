import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ka16ahzxe.css';
import '../../css/i/il3n3pbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ka16ahzxe"/><path class="il3n3pbvc"/></g>`,
		"fallback": "solar:airbuds-case-minimalistic-broken",
	});
}

export default Component;
