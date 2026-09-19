import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdxulbcfp.css';
import '../../css/j/j47axpdci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fdxulbcfp"/><path class="j47axpdci"/></g>`,
		"fallback": "bi:house-heart-fill",
	});
}

export default Component;
