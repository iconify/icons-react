import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqd9so5au.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqd9so5au"/>`,
		"fallback": "bx:bxs-card",
	});
}

export default Component;
