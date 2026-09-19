import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhse-g5zn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhse-g5zn"/>`,
		"fallback": "garden:align-center-stroke-16",
	});
}

export default Component;
