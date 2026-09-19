import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e46dreb0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e46dreb0s"/>`,
		"fallback": "fa-solid:coins",
	});
}

export default Component;
