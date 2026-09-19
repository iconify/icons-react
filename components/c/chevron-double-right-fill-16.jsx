import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x57qn6w7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x57qn6w7r"/>`,
		"fallback": "garden:chevron-double-right-fill-16",
	});
}

export default Component;
