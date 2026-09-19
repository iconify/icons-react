import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg5ex23xf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg5ex23xf"/>`,
		"fallback": "garden:eye-hide-stroke-16",
	});
}

export default Component;
