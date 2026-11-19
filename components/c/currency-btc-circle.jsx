import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov0i7wbhw.css';
import '../../css/u/u5z2xlx6s.css';
import '../../css/p/putecyz5x.css';
import '../../css/p/p4pn9mm9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ov0i7wbhw"/><path class="u5z2xlx6s"/><path class="putecyz5x"/><path class="p4pn9mm9j"/></g>`,
		"fallback": "andrsrxn:currency-btc-circle",
	});
}

export default Component;
