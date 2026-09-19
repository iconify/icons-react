import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rvsc-bbld.css';
import '../../css/i/iinkstb0q.css';

const viewBox = {"width":39,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rvsc-bbld"/><path class="iinkstb0q"/></g>`,
		"fallback": "et:desktop",
	});
}

export default Component;
