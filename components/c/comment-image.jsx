import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-1qd4bir.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-1qd4bir"/>`,
		"fallback": "zmdi:comment-image",
	});
}

export default Component;
