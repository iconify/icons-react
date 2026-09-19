import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssah3cbkg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssah3cbkg"/>`,
		"fallback": "garden:filter-stroke-16",
	});
}

export default Component;
