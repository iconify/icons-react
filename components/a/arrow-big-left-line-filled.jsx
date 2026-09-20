import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jsktgv42r.css';
import '../../css/l/l0cury8tp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jsktgv42r"/><path class="l0cury8tp"/></g>`,
		"fallback": "tabler:arrow-big-left-line-filled",
	});
}

export default Component;
