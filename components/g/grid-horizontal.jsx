import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnx13n9nc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnx13n9nc"/>`,
		"fallback": "rivet-icons:grid-horizontal",
	});
}

export default Component;
