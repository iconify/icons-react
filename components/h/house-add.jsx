import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/afzhsxbjv.css';
import '../../css/w/wv_1t2mbg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="afzhsxbjv"/><path class="wv_1t2mbg"/></g>`,
		"fallback": "bi:house-add",
	});
}

export default Component;
