import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_n2_xvoh.css';
import '../../css/r/rif1c47sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o_n2_xvoh"/><path class="rif1c47sj"/></g>`,
		"fallback": "flowbite:bowl-food-solid",
	});
}

export default Component;
