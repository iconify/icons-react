import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ukzkre2ss.css';
import '../../css/b/bn9f7oblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path clip-rule="evenodd" class="ukzkre2ss"/><path class="bn9f7oblf"/></g>`,
		"fallback": "hugeicons:copy-x",
	});
}

export default Component;
