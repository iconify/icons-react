import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/e/er1cyr2ic.css';
import '../../css/s/s89vkx62j.css';
import '../../css/a/a6-oaq27y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="er1cyr2ic"/><path class="s89vkx62j"/><path class="a6-oaq27y"/></g>`,
		"fallback": "andrsrxn:currency-afn-circle",
	});
}

export default Component;
