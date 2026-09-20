import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hk-5v_b7x.css';
import '../../css/c/c3mu0zkpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hk-5v_b7x"/><path class="c3mu0zkpx"/></g>`,
		"fallback": "reicon:headphones2-duotone",
	});
}

export default Component;
