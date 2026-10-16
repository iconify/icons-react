import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y4qjd0i0q.css';
import '../../css/k/k-wamd0up.css';
import '../../css/a/aqe2mqn0h.css';
import '../../css/k/khdkximwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y4qjd0i0q"/><path class="k-wamd0up"/><path class="aqe2mqn0h"/><path class="khdkximwp"/></g>`,
		"fallback": "andrsrxn:currency-eth-circle",
	});
}

export default Component;
