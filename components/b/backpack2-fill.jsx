import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cho6g1beo.css';
import '../../css/p/pirmk_bad.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cho6g1beo"/><path class="pirmk_bad"/></g>`,
		"fallback": "bi:backpack2-fill",
	});
}

export default Component;
