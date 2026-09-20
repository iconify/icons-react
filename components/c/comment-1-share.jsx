import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt0g3qb2b.css';
import '../../css/e/eu46usfmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt0g3qb2b"/><path clip-rule="evenodd" class="eu46usfmp"/>`,
		"fallback": "lineicons:comment-1-share",
	});
}

export default Component;
