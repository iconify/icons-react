import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_c48qb-m.css';

const viewBox = {"width":480,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_c48qb-m"/>`,
		"fallback": "ps:copy",
	});
}

export default Component;
