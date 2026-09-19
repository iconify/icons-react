import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pbx2qdb4e.css';
import '../../css/r/rodt28bzi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pbx2qdb4e"/><path class="rodt28bzi"/></g>`,
		"fallback": "bi:cloud-minus",
	});
}

export default Component;
