import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfrhk1b-s.css';
import '../../css/a/a58ac9brq.css';
import '../../css/c/c8x8g5sqh.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dfrhk1b-s"/><path class="a58ac9brq"/><circle class="c8x8g5sqh"/></g>`,
		"fallback": "jam:instagram",
	});
}

export default Component;
