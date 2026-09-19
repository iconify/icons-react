import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yhi3dcc9m.css';
import '../../css/z/z9edi6b_u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yhi3dcc9m"/><circle class="z9edi6b_u"/></g>`,
		"fallback": "garden:eye-fill-16",
	});
}

export default Component;
