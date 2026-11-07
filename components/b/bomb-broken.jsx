import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aa_n4rjmb.css';
import '../../css/m/m99yuxjsm.css';
import '../../css/n/n8llc_q5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aa_n4rjmb"/><path class="m99yuxjsm"/><path class="n8llc_q5p"/></g>`,
		"fallback": "solar:bomb-broken",
	});
}

export default Component;
