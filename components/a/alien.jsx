import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4pahuaeu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4pahuaeu"/>`,
		"fallback": "picon:alien",
	});
}

export default Component;
