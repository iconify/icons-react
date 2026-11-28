import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdg_nsbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdg_nsbjp"/>`,
		"fallback": "noviair-light:binoculars",
	});
}

export default Component;
