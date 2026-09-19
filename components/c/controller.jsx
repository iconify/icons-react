import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rexxljbop.css';
import '../../css/q/qe8i13bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rexxljbop"/><path clip-rule="evenodd" class="qe8i13bfg"/></g>`,
		"fallback": "gg:controller",
	});
}

export default Component;
