import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m6idhz8-e.css';
import '../../css/y/y652i5bsv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m6idhz8-e"/><path class="y652i5bsv"/></g>`,
		"fallback": "at-icons:arrow-right-from-bracket",
	});
}

export default Component;
