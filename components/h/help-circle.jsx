import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwmc9j4zj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwmc9j4zj"/>`,
		"fallback": "ion:help-circle",
	});
}

export default Component;
