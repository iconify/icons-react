import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/klbzx33-w.css';
import '../../css/x/xe_rrubud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="klbzx33-w"/><path class="xe_rrubud"/></g>`,
		"fallback": "bi:geo-alt",
	});
}

export default Component;
