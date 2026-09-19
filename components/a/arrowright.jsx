import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bky_spooe.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bky_spooe"/>`,
		"fallback": "whh:arrowright",
	});
}

export default Component;
