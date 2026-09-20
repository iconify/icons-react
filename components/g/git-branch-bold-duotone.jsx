import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sy_py1o4u.css';
import '../../css/s/sxv1f4b3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sy_py1o4u"/><path clip-rule="evenodd" class="sxv1f4b3g"/></g>`,
		"fallback": "solar:git-branch-bold-duotone",
	});
}

export default Component;
