import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejdx2fbwp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejdx2fbwp"/>`,
		"fallback": "la:cloud-moon-rain-solid",
	});
}

export default Component;
