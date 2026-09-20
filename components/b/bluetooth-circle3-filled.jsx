import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzvnzibpo.css';
import '../../css/z/z8e2aob6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fzvnzibpo"/><path class="z8e2aob6g"/></g>`,
		"fallback": "reicon:bluetooth-circle3-filled",
	});
}

export default Component;
