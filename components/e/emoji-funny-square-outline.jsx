import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x33likbcw.css';
import '../../css/u/u0uwf9b9e.css';
import '../../css/k/kpna6_mdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x33likbcw"/><path class="u0uwf9b9e"/><path clip-rule="evenodd" class="kpna6_mdj"/></g>`,
		"fallback": "solar:emoji-funny-square-outline",
	});
}

export default Component;
