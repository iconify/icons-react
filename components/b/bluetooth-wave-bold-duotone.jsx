import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqe01s-uy.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/l8s031fwy.css';
import '../../css/s/sgu_fyztv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pqe01s-uy"/><g class="mc2zb0bvp"><path class="l8s031fwy"/><path class="sgu_fyztv"/></g></g>`,
		"fallback": "solar:bluetooth-wave-bold-duotone",
	});
}

export default Component;
