import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mad9j7bvj.css';
import '../../css/n/nz5gg5bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mad9j7bvj"/><path clip-rule="evenodd" class="nz5gg5bod"/></g>`,
		"fallback": "reicon:card-filled",
	});
}

export default Component;
