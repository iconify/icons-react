import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/d/d4-5r8byc.css';
import '../../css/d/d8esv_bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="d4-5r8byc"/><path class="d8esv_bmy"/></g>`,
		"fallback": "solar:bookmark-square-line-duotone",
	});
}

export default Component;
