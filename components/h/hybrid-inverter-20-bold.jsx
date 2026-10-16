import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqy4zebrn.css';
import '../../css/s/sv9da_bvv.css';
import '../../css/o/oybwn4bef.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqy4zebrn"/><path class="sv9da_bvv"/><path class="oybwn4bef"/>`,
		"fallback": "energy-icons:hybrid-inverter-20-bold",
	});
}

export default Component;
