import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ort_5xell.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ort_5xell"/>`,
		"fallback": "flowbite:grid-outline",
	});
}

export default Component;
