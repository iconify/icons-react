import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uim4p51pr.css';
import '../../css/m/mvy85obwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uim4p51pr"/><path clip-rule="evenodd" class="mvy85obwl"/></g>`,
		"fallback": "flowbite:draw-square-solid",
	});
}

export default Component;
