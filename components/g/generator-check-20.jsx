import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le62_1bgw.css';
import '../../css/w/wikar0bxx.css';
import '../../css/q/qh3-d7bck.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le62_1bgw"/><path class="wikar0bxx"/><path class="qh3-d7bck"/>`,
		"fallback": "energy-icons:generator-check-20",
	});
}

export default Component;
