import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yu0fh_seg.css';
import '../../css/p/pbgfbyb5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yu0fh_seg"/><path class="pbgfbyb5w"/></g>`,
		"fallback": "at-icons:hinge-joint",
	});
}

export default Component;
