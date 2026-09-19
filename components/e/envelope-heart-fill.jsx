import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oxx1a4b9v.css';
import '../../css/e/eetmgobvl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oxx1a4b9v"/><path class="eetmgobvl"/></g>`,
		"fallback": "bi:envelope-heart-fill",
	});
}

export default Component;
