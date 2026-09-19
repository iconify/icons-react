import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1uo0nbcg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1uo0nbcg"/>`,
		"fallback": "bi:chat-quote-fill",
	});
}

export default Component;
