import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq_q15z3l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq_q15z3l"/>`,
		"fallback": "fa-brands:guilded",
	});
}

export default Component;
