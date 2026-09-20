import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4ctcgx1r.css';
import '../../css/l/lxr83f_ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4ctcgx1r"/><path class="lxr83f_ba"/></g>`,
		"fallback": "reicon:earbuds-case-filled",
	});
}

export default Component;
