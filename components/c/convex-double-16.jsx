import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj-ycvb7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hj-ycvb7e"/>`,
		"fallback": "qlementine-icons:convex-double-16",
	});
}

export default Component;
