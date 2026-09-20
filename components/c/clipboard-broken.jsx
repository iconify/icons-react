import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/ndq0ugbyy.css';
import '../../css/q/qu0eyjbrg.css';
import '../../css/m/m390b8qby.css';
import '../../css/r/ruv56nblh.css';
import '../../css/r/r_va8z9vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ndq0ugbyy"/><path class="qu0eyjbrg"/><path class="m390b8qby"/><path class="ruv56nblh"/><path class="r_va8z9vn"/></g>`,
		"fallback": "solar:clipboard-broken",
	});
}

export default Component;
