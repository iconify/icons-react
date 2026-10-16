import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov0i7wbhw.css';
import '../../css/f/fvxzbfbah.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ov0i7wbhw"/><path class="fvxzbfbah"/><path class="khdkximwp"/></g>`,
		"fallback": "andrsrxn:currency-btc-circle",
	});
}

export default Component;
