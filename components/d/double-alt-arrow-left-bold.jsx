import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gwhn8mbdf.css';
import '../../css/f/fczqh7biv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gwhn8mbdf"/><path class="fczqh7biv"/></g>`,
		"fallback": "solar:double-alt-arrow-left-bold",
	});
}

export default Component;
