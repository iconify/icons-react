import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nedfe4b8z.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nedfe4b8z"/>`,
		"fallback": "fa-solid:check-square",
	});
}

export default Component;
