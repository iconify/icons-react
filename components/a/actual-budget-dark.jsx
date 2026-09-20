import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quig9gbhj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quig9gbhj"/>`,
		"fallback": "selfhst:actual-budget-dark",
	});
}

export default Component;
