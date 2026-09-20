import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh-bxob0v.css';
import '../../css/o/or6tflh7g.css';
import '../../css/w/wt5q0gb-i.css';
import '../../css/i/i-zynpbbb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh-bxob0v"/><path class="or6tflh7g"/><path class="wt5q0gb-i"/><path class="i-zynpbbb"/>`,
		"fallback": "selfhst:byparr",
	});
}

export default Component;
