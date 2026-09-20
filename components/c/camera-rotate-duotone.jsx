import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u74yizbkg.css';
import '../../css/u/uww0n9j1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u74yizbkg"/><path class="uww0n9j1s"/></g>`,
		"fallback": "reicon:camera-rotate-duotone",
	});
}

export default Component;
