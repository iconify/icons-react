import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c30imabev.css';
import '../../css/b/bunl2-bfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c30imabev"/><path class="bunl2-bfm"/></g>`,
		"fallback": "hugeicons:account-setting-01",
	});
}

export default Component;
