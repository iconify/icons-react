import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flcmoz7dz.css';
import '../../css/c/c21dkybzf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="flcmoz7dz"/><path class="c21dkybzf"/></g>`,
		"fallback": "rivet-icons:chevrons-right",
	});
}

export default Component;
