import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd8h75b1u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd8h75b1u"/>`,
		"fallback": "fa-solid:border-none",
	});
}

export default Component;
