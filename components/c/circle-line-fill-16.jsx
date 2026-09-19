import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvntw1cis.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvntw1cis"/>`,
		"fallback": "garden:circle-line-fill-16",
	});
}

export default Component;
