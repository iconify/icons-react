import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk0nyobdk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk0nyobdk"/>`,
		"fallback": "oi:comment-square",
	});
}

export default Component;
