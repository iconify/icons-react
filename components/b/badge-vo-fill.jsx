import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l7u_sibjo.css';
import '../../css/a/anwo3x54o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l7u_sibjo"/><path class="anwo3x54o"/></g>`,
		"fallback": "bi:badge-vo-fill",
	});
}

export default Component;
