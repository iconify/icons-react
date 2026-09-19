import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/szgax_iha.css';
import '../../css/r/r0tjb5b6u.css';
import '../../css/u/u0zcgxn-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="szgax_iha"/><path class="r0tjb5b6u"/><path class="u0zcgxn-a"/></g>`,
		"fallback": "hugeicons:arrow-up-to-line",
	});
}

export default Component;
