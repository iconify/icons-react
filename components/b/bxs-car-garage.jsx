import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef1_z1bld.css';
import '../../css/h/h0_g0cb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef1_z1bld"/><path class="h0_g0cb-k"/>`,
		"fallback": "bx:bxs-car-garage",
	});
}

export default Component;
