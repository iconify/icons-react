import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5e1o2yxm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5e1o2yxm"/>`,
		"fallback": "bi:chevron-compact-down",
	});
}

export default Component;
