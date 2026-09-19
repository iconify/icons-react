import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgup-ulwe.css';
import '../../css/x/xf0sc_b5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jgup-ulwe"/><path class="xf0sc_b5l"/></g>`,
		"fallback": "bi:images",
	});
}

export default Component;
