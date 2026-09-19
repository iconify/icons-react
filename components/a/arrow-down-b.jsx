import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_uy_9btj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_uy_9btj"/>`,
		"fallback": "ion:arrow-down-b",
	});
}

export default Component;
