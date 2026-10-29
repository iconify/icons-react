import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqdsmob1w.css';
import '../../css/a/a5q1z5qkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqdsmob1w wm-k"/><path class="a5q1z5qkn wm-a"/>`,
		"fallback": "withicons-bauhaus:badge-check",
	});
}

export default Component;
