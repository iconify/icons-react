import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5z51jagi.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5z51jagi"/>`,
		"fallback": "fa6-solid:chalkboard",
	});
}

export default Component;
