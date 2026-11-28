import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ur3o2ybij.css';
import '../../css/t/t072poxqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ur3o2ybij"/><path class="primary t072poxqn"/></g>`,
		"fallback": "iconaut:game-cartridge-duotone",
	});
}

export default Component;
