import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht_1znvpm.css';
import '../../css/q/q136k_oms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ht_1znvpm"/><path clip-rule="evenodd" class="q136k_oms"/></g>`,
		"fallback": "majesticons:book-plus",
	});
}

export default Component;
