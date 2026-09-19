import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hem6pgwtg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hem6pgwtg"/>`,
		"fallback": "fad:backward",
	});
}

export default Component;
