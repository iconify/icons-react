import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttu2v-2ik.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttu2v-2ik"/>`,
		"fallback": "dashicons:buddicons-pm",
	});
}

export default Component;
