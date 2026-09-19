import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o8gm9zlaa.css';
import '../../css/i/iss23tpjy.css';
import '../../css/k/ki55z6ilg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o8gm9zlaa"/><path class="iss23tpjy"/><path class="ki55z6ilg"/></g>`,
		"fallback": "hugeicons:briefcase-business",
	});
}

export default Component;
