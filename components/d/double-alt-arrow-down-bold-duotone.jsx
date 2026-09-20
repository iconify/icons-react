import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3f7ln7wn.css';
import '../../css/a/a02p_nb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3f7ln7wn"/><path clip-rule="evenodd" class="a02p_nb_i"/></g>`,
		"fallback": "solar:double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
