import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/an2izub5j.css';
import '../../css/h/h32ym5bol.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="an2izub5j"/><path class="h32ym5bol"/></g>`,
		"fallback": "bi:badge-3d",
	});
}

export default Component;
