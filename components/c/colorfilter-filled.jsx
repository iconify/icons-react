import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ljjoe1bcw.css';
import '../../css/y/y7u_sr00p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ljjoe1bcw"/><path class="y7u_sr00p"/></g>`,
		"fallback": "reicon:colorfilter-filled",
	});
}

export default Component;
