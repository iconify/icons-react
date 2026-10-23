import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pmrbhqbhd.css';
import '../../css/m/mqrhrvbgq.css';
import '../../css/d/demkscbxt.css';
import '../../css/t/tliq8nftf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pmrbhqbhd"/><path class="mqrhrvbgq"/><path class="demkscbxt"/><circle transform="rotate(90 12 11.98)" class="tliq8nftf"/></g>`,
		"fallback": "andrsrxn:currency-sol-circle",
	});
}

export default Component;
