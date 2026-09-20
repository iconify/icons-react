import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqlpajbrm.css';
import '../../css/l/l_82l62bb.css';
import '../../css/f/fzg7edc3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqlpajbrm"/><path class="l_82l62bb"/><path class="fzg7edc3t"/></g>`,
		"fallback": "solar:database-bold",
	});
}

export default Component;
