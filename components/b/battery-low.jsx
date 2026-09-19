import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xu9q9k5fj.css';
import '../../css/m/mv68o2z5x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xu9q9k5fj"/><path class="mv68o2z5x"/></g>`,
		"fallback": "at-icons:battery-low",
	});
}

export default Component;
