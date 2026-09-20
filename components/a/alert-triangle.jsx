import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nibhs1b3q.css';
import '../../css/x/xl2dxuvlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nibhs1b3q"/><path clip-rule="evenodd" class="xl2dxuvlk"/></g>`,
		"fallback": "reicon:alert-triangle",
	});
}

export default Component;
