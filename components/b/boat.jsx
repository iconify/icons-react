import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ksd__h56e.css';
import '../../css/k/k7_vyccng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ksd__h56e"/><path class="k7_vyccng"/></g>`,
		"fallback": "at-icons:boat",
	});
}

export default Component;
