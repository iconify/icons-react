import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkqhd_div.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkqhd_div"/>`,
		"fallback": "fa-solid:cloud-moon",
	});
}

export default Component;
