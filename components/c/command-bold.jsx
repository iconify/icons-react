import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc6w1jbja.css';
import '../../css/k/k0512fcyc.css';
import '../../css/m/m1enbabxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mc6w1jbja"/><path class="k0512fcyc"/><path class="m1enbabxz"/></g>`,
		"fallback": "solar:command-bold",
	});
}

export default Component;
