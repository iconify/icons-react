import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9rq_swmq.css';
import '../../css/b/bhcwjtbdh.css';
import '../../css/y/y-ulyzb5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9rq_swmq"/><path class="bhcwjtbdh"/><path class="y-ulyzb5u"/>`,
		"fallback": "ion:balloon-outline",
	});
}

export default Component;
