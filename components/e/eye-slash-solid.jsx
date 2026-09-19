import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1y8b68qt.css';
import '../../css/c/cg7m802ly.css';
import '../../css/c/czoppacab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1y8b68qt"/><path class="cg7m802ly"/><path class="czoppacab"/></g>`,
		"fallback": "heroicons:eye-slash-solid",
	});
}

export default Component;
