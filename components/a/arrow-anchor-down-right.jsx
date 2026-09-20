import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1yxwjbmn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1yxwjbmn"/>`,
		"fallback": "rivet-icons:arrow-anchor-down-right",
	});
}

export default Component;
