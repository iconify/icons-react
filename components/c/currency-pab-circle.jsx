import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii79gpbho.css';
import '../../css/i/i_b5r9-6s.css';
import '../../css/m/mr64pobec.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ii79gpbho"/><path class="i_b5r9-6s"/><path class="mr64pobec"/><path class="khdkximwp"/></g>`,
		"fallback": "andrsrxn:currency-pab-circle",
	});
}

export default Component;
