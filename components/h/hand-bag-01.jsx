import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0avo1bww.css';
import '../../css/l/lj9o2zbay.css';
import '../../css/h/h2i-zfbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e0avo1bww"/><path class="lj9o2zbay"/><path class="h2i-zfbvp"/></g>`,
		"fallback": "hugeicons:hand-bag-01",
	});
}

export default Component;
