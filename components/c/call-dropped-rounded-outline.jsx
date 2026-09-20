import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ru5d8tbmh.css';
import '../../css/b/bkvdjbb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ru5d8tbmh"/><path clip-rule="evenodd" class="bkvdjbb0j"/></g>`,
		"fallback": "solar:call-dropped-rounded-outline",
	});
}

export default Component;
