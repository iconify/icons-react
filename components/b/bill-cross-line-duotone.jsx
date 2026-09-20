import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8z3hqtgg.css';
import '../../css/t/tnf8gbb-i.css';
import '../../css/u/uiwsg29tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t8z3hqtgg"/><path class="tnf8gbb-i"/><path class="uiwsg29tk"/></g>`,
		"fallback": "solar:bill-cross-line-duotone",
	});
}

export default Component;
