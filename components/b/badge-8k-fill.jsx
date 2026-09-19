import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x0-uar2io.css';
import '../../css/h/he358pbcp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x0-uar2io"/><path class="he358pbcp"/></g>`,
		"fallback": "bi:badge-8k-fill",
	});
}

export default Component;
