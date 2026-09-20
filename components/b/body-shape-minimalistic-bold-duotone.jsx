import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pw53a_bdn.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/tjhhk1oam.css';
import '../../css/c/cl675i1cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pw53a_bdn"/><g class="mc2zb0bvp"><path class="tjhhk1oam"/><path class="cl675i1cs"/></g></g>`,
		"fallback": "solar:body-shape-minimalistic-bold-duotone",
	});
}

export default Component;
