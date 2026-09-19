import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekrwu9tce.css';
import '../../css/f/fcnf1acic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekrwu9tce"/><path class="fcnf1acic"/></g>`,
		"fallback": "bi:briefcase-fill",
	});
}

export default Component;
