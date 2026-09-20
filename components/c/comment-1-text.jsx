import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mglbirb9o.css';
import '../../css/e/eu46usfmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mglbirb9o"/><path clip-rule="evenodd" class="eu46usfmp"/>`,
		"fallback": "lineicons:comment-1-text",
	});
}

export default Component;
