import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4b9_fbau.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4b9_fbau"/>`,
		"fallback": "zmdi:card-membership",
	});
}

export default Component;
