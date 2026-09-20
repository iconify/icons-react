import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sk7wps2ek.css';
import '../../css/m/md9-tgmbm.css';
import '../../css/v/vytfr6n3p.css';
import '../../css/x/xmo_fnmfp.css';
import '../../css/h/hos9lj1_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sk7wps2ek"/><path class="md9-tgmbm"/><path class="vytfr6n3p"/><path class="xmo_fnmfp"/><path class="hos9lj1_y"/></g>`,
		"fallback": "solar:cart-5-bold-duotone",
	});
}

export default Component;
