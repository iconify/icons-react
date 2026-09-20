import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c5yb8bdcb.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c5yb8bdcb"/><path class="pw8f5c0fp"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:danger-square-linear",
	});
}

export default Component;
