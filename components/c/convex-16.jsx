import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe1kayn5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pe1kayn5v"/>`,
		"fallback": "qlementine-icons:convex-16",
	});
}

export default Component;
