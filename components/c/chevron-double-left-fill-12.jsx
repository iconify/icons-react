import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do1xd6lny.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do1xd6lny"/>`,
		"fallback": "garden:chevron-double-left-fill-12",
	});
}

export default Component;
