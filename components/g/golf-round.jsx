import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi1_q9o5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi1_q9o5q"/>`,
		"fallback": "coolicons:golf-round",
	});
}

export default Component;
