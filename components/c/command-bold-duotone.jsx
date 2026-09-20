import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k0512fcyc.css';
import '../../css/m/m1enbabxz.css';
import '../../css/o/ofz9dkbtj.css';
import '../../css/c/czi505bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k0512fcyc"/><path class="m1enbabxz"/><path clip-rule="evenodd" class="ofz9dkbtj"/><path class="czi505bfc"/></g>`,
		"fallback": "solar:command-bold-duotone",
	});
}

export default Component;
