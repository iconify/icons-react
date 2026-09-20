import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt0urabjs.css';
import '../../css/m/mgxmn9o8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt0urabjs"/><path class="mgxmn9o8z"/>`,
		"fallback": "stash:filter-duotone",
	});
}

export default Component;
