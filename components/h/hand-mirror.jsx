import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6jf2pb1x.css';
import '../../css/h/h2-tmbcxj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6jf2pb1x"/><path class="h2-tmbcxj"/></g>`,
		"fallback": "at-icons:hand-mirror",
	});
}

export default Component;
