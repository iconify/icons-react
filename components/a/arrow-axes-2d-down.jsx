import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blah4vbiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blah4vbiz"/>`,
		"fallback": "at-icons:arrow-axes-2d-down",
	});
}

export default Component;
