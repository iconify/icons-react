import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plo6q25eo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plo6q25eo"/>`,
		"fallback": "flowbite:adjustments-horizontal-outline",
	});
}

export default Component;
