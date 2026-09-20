import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzpei7bmr.css';
import '../../css/m/mmutxxbyz.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wzpei7bmr"/><path class="mmutxxbyz"/></g>`,
		"fallback": "iwwa:humidity",
	});
}

export default Component;
