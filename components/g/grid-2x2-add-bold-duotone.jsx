import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayk63p5nm.css';
import '../../css/v/v18-fiblr.css';
import '../../css/z/zqdqhkbce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayk63p5nm"/><path class="v18-fiblr"/><path class="zqdqhkbce"/></g>`,
		"fallback": "solar:grid-2x2-add-bold-duotone",
	});
}

export default Component;
