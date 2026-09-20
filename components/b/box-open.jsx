import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/ubczdxbzu.css';
import '../../css/v/v5zmisb0l.css';
import '../../css/k/k73vt3bvb.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="ubczdxbzu"/><path class="v5zmisb0l"/><path class="k73vt3bvb"/></g>`,
		"fallback": "system-uicons:box-open",
	});
}

export default Component;
