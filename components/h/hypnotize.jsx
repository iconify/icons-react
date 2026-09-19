import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ee1swp9sn.css';
import '../../css/p/pdmwjx06t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ee1swp9sn"/><path class="pdmwjx06t"/></g>`,
		"fallback": "bi:hypnotize",
	});
}

export default Component;
