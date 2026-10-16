import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8xo_c6fy.css';
import '../../css/k/kwq58xm-v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8xo_c6fy"/><path class="kwq58xm-v"/>`,
		"fallback": "energy-icons:film-reel-20-bold",
	});
}

export default Component;
