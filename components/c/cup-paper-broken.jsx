import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajqdw-o6p.css';
import '../../css/k/kdm5jlb9n.css';
import '../../css/r/rtchpvbvw.css';
import '../../css/v/v-gq4r2to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ajqdw-o6p"/><path class="kdm5jlb9n"/><path class="rtchpvbvw"/><path class="v-gq4r2to"/></g>`,
		"fallback": "solar:cup-paper-broken",
	});
}

export default Component;
