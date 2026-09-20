import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brruq5e5u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brruq5e5u"/>`,
		"fallback": "octicon:graph-16",
	});
}

export default Component;
