import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v6t2xvb2l.css';
import '../../css/o/onkje7wiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v6t2xvb2l"/><path class="onkje7wiz"/></g>`,
		"fallback": "at-icons:exposure",
	});
}

export default Component;
