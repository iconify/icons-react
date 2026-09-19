import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1puo02_r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1puo02_r"/>`,
		"fallback": "fa-solid:cloud-sun-rain",
	});
}

export default Component;
