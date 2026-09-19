import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4ksah0px.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4ksah0px"/>`,
		"fallback": "garden:book-closed-stroke-16",
	});
}

export default Component;
