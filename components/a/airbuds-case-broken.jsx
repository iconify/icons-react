import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ka16ahzxe.css';
import '../../css/m/mgi3zn3tq.css';
import '../../css/u/u296q5x9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ka16ahzxe"/><path class="mgi3zn3tq"/><path class="u296q5x9o"/></g>`,
		"fallback": "solar:airbuds-case-broken",
	});
}

export default Component;
