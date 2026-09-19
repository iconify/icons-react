import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kunn4ubvb.css';
import '../../css/t/tils3-_7p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kunn4ubvb"/><path class="tils3-_7p"/></g>`,
		"fallback": "at-icons:duplicate",
	});
}

export default Component;
