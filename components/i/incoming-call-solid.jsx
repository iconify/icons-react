import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wge28-bda.css';
import '../../css/h/hvavnnbxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wge28-bda"/><path clip-rule="evenodd" class="hvavnnbxg"/></g>`,
		"fallback": "flowbite:incoming-call-solid",
	});
}

export default Component;
