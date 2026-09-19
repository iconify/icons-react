import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lcn5imzsu.css';
import '../../css/o/ocg5i7b2f.css';
import '../../css/w/w23rjnycg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lcn5imzsu"/><path class="ocg5i7b2f"/><path class="w23rjnycg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:amphora",
	});
}

export default Component;
