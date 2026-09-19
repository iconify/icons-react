import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q3io1hbci.css';
import '../../css/a/a5vee8bqa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q3io1hbci"/><path class="a5vee8bqa"/></g>`,
		"fallback": "at-icons:bar-graph",
	});
}

export default Component;
