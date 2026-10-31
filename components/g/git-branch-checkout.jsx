import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xv0-mjq3d.css';
import '../../css/k/kmyxcmbwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xv0-mjq3d"/><path class="kmyxcmbwl"/></g>`,
		"fallback": "codicon:git-branch-checkout",
	});
}

export default Component;
