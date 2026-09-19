import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esdsk5kuo.css';
import '../../css/c/c3ire1u8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esdsk5kuo"/><path class="c3ire1u8m"/></g>`,
		"fallback": "bi:cloud-slash",
	});
}

export default Component;
