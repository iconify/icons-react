import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vkpfohz9v.css';
import '../../css/n/ngd-57baz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vkpfohz9v"/><path class="ngd-57baz"/></g>`,
		"fallback": "at-icons:coin",
	});
}

export default Component;
