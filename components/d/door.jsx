import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kinyqzbsz.css';
import '../../css/s/szjd6r78e.css';
import '../../css/p/p103cbcyv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(4 3)" class="bi12bsetm"><path class="kinyqzbsz"/><path class="szjd6r78e"/><circle class="p103cbcyv"/></g>`,
		"fallback": "system-uicons:door",
	});
}

export default Component;
