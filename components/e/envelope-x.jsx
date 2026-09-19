import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qijp735rw.css';
import '../../css/e/ekllxobep.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qijp735rw"/><path class="ekllxobep"/></g>`,
		"fallback": "bi:envelope-x",
	});
}

export default Component;
