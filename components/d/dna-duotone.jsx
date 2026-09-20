import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_o5f_93f.css';
import '../../css/j/ju-8qs_bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w_o5f_93f"/><path class="ju-8qs_bz"/></g>`,
		"fallback": "reicon:dna-duotone",
	});
}

export default Component;
