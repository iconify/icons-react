import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0icxjb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0icxjb2l"/>`,
		"fallback": "fa6-solid:chevron-up",
	});
}

export default Component;
