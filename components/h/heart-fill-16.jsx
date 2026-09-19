import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3j1vl57g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3j1vl57g"/>`,
		"fallback": "garden:heart-fill-16",
	});
}

export default Component;
