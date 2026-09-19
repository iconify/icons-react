import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9l492b5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9l492b5v"/>`,
		"fallback": "garden:duplicate-stroke-16",
	});
}

export default Component;
