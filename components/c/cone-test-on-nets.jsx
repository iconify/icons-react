import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p5j781bnq.css';
import '../../css/a/aogtgbbpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p5j781bnq"/><path class="aogtgbbpc"/></g>`,
		"fallback": "healthicons:cone-test-on-nets",
	});
}

export default Component;
