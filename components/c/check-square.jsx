import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd5hjkb4u.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd5hjkb4u"/>`,
		"fallback": "fa:check-square",
	});
}

export default Component;
