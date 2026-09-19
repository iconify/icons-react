import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl9_6mbqa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl9_6mbqa"/>`,
		"fallback": "garden:flag-stroke-16",
	});
}

export default Component;
