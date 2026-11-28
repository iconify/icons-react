import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cimrc94ek.css';
import '../../css/o/o0bl5bbke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cimrc94ek secondary"/><path class="o0bl5bbke primary"/></g>`,
		"fallback": "iconaut:ice-cream-duotone",
	});
}

export default Component;
