import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_ratk9-q.css';
import '../../css/k/ks-ynwbil.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_ratk9-q"/><path class="ks-ynwbil"/></g>`,
		"fallback": "at-icons:edge",
	});
}

export default Component;
