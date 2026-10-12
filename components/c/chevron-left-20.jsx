import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw9vzpbis.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw9vzpbis"/>`,
		"fallback": "garden:chevron-left-20",
	});
}

export default Component;
