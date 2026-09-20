import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jadh4hbzm.css';
import '../../css/y/y6qmidbva.css';
import '../../css/h/hsm64gbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jadh4hbzm"/><path class="y6qmidbva"/><path class="hsm64gbpu"/></g>`,
		"fallback": "solar:cloud-sun-2-bold",
	});
}

export default Component;
