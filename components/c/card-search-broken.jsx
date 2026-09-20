import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e7djpjbfe.css';
import '../../css/k/ktpncgb0v.css';
import '../../css/a/aaakgqotp.css';
import '../../css/i/i8e2akblu.css';
import '../../css/e/ehgcfqbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e7djpjbfe"/><path class="ktpncgb0v"/><circle class="aaakgqotp"/><path class="i8e2akblu"/><path class="ehgcfqbdl"/></g>`,
		"fallback": "solar:card-search-broken",
	});
}

export default Component;
