import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/p/p4pn9mm9j.css';
import '../../css/b/by4n79bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="p4pn9mm9j"/><path class="by4n79bli"/></g>`,
		"fallback": "andrsrxn:copyright-off",
	});
}

export default Component;
