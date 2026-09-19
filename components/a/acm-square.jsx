import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_8ak0wuc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_8ak0wuc"/>`,
		"fallback": "academicons:acm-square",
	});
}

export default Component;
