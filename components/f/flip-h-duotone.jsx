import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1-fp0brg.css';
import '../../css/k/k0ho4bcrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1-fp0brg"/><path clip-rule="evenodd" class="k0ho4bcrz"/></g>`,
		"fallback": "reicon:flip-h-duotone",
	});
}

export default Component;
