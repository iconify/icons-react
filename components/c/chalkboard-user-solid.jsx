import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/piz8jnbxz.css';
import '../../css/b/bqqa9pbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="piz8jnbxz"/><path class="bqqa9pbnc"/></g>`,
		"fallback": "flowbite:chalkboard-user-solid",
	});
}

export default Component;
