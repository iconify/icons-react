import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5ukf1u_z.css';
import '../../css/s/s-f2414gw.css';
import '../../css/z/zdx0yk9nh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b5ukf1u_z"/><path clip-rule="evenodd" class="s-f2414gw"/><path class="zdx0yk9nh"/></g>`,
		"fallback": "codicon:edit-sparkle",
	});
}

export default Component;
