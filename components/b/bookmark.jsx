import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzm_--n7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzm_--n7e"/>`,
		"fallback": "rivet-icons:bookmark",
	});
}

export default Component;
