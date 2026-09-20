import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ubwfpy16r.css';
import '../../css/e/e-jucopue.css';
import '../../css/g/gydr5xzud.css';
import '../../css/a/a_mtj062n.css';
import '../../css/s/sllw21b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ubwfpy16r"/><path class="e-jucopue"/><circle transform="matrix(-1 0 0 1 21 11)" class="gydr5xzud"/><path class="a_mtj062n"/><path class="sllw21b5i"/></g>`,
		"fallback": "solar:airbuds-left-line-duotone",
	});
}

export default Component;
