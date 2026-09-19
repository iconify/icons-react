import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dggbq7bqi.css';
import '../../css/q/qagk1jfqk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dggbq7bqi"/><path class="qagk1jfqk"/></g>`,
		"fallback": "bi:0-circle",
	});
}

export default Component;
