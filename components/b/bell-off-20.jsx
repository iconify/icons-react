import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7lbhgb_q.css';
import '../../css/i/iffp3wblr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7lbhgb_q"/><path class="iffp3wblr"/>`,
		"fallback": "energy-icons:bell-off-20",
	});
}

export default Component;
