import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_uj6-bph.css';
import '../../css/m/mp-ousb8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_uj6-bph"/><path class="mp-ousb8u"/></g>`,
		"fallback": "andrsrxn:gamepad-directional-up-filled",
	});
}

export default Component;
