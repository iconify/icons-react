import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5ak0flgi.css';
import '../../css/y/yu29d673f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l5ak0flgi"/><path clip-rule="evenodd" class="yu29d673f"/></g>`,
		"fallback": "reicon:calendar",
	});
}

export default Component;
