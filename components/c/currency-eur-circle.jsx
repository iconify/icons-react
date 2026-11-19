import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/e/e8fm_--uz.css';
import '../../css/p/p4pn9mm9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="e8fm_--uz"/><path class="p4pn9mm9j"/></g>`,
		"fallback": "andrsrxn:currency-eur-circle",
	});
}

export default Component;
