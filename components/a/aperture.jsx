import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9o1tloua.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9o1tloua"/>`,
		"fallback": "at-icons:aperture",
	});
}

export default Component;
