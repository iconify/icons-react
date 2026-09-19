import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0u_4izij.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0u_4izij"/>`,
		"fallback": "whh:banana",
	});
}

export default Component;
