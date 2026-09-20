import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1wukabrr.css';
import '../../css/j/jy6950b6a.css';
import '../../css/v/v2n5lwbnn.css';
import '../../css/z/zwqh3bbos.css';
import '../../css/o/otqkq7b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m1wukabrr"/><path class="jy6950b6a"/><path class="v2n5lwbnn"/><path class="zwqh3bbos"/><path class="otqkq7b5e"/></g>`,
		"fallback": "solar:container-bold-duotone",
	});
}

export default Component;
