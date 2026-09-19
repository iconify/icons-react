import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wntg5sbkp.css';
import '../../css/i/iveur3sqt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wntg5sbkp"/><path class="iveur3sqt"/></g>`,
		"fallback": "at-icons:ground",
	});
}

export default Component;
