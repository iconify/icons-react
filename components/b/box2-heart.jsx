import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kw2hekdfp.css';
import '../../css/e/eacd2tb7n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kw2hekdfp"/><path class="eacd2tb7n"/></g>`,
		"fallback": "bi:box2-heart",
	});
}

export default Component;
