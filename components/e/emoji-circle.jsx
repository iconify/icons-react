import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z8xgg-4yk.css';
import '../../css/t/to9w54caa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z8xgg-4yk"/><path clip-rule="evenodd" class="to9w54caa"/></g>`,
		"fallback": "reicon:emoji-circle",
	});
}

export default Component;
