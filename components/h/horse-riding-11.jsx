import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_ivvacuz.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_ivvacuz"/>`,
		"fallback": "maki:horse-riding-11",
	});
}

export default Component;
