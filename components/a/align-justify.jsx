import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3uxh5b8u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3uxh5b8u"/>`,
		"fallback": "fa-solid:align-justify",
	});
}

export default Component;
