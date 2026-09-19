import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/acwlyrb7b.css';
import '../../css/b/bdc3psbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="acwlyrb7b"/><path class="bdc3psbxs"/></g>`,
		"fallback": "ginetex:40c-very-mild-wash",
	});
}

export default Component;
