import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db-1jbcvj.css';

const viewBox = {"width":1600,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db-1jbcvj"/>`,
		"fallback": "fa:check",
	});
}

export default Component;
