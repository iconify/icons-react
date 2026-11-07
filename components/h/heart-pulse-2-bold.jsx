import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glp1ur27k.css';
import '../../css/w/ww5xev0qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glp1ur27k"/><path class="ww5xev0qs"/>`,
		"fallback": "solar:heart-pulse-2-bold",
	});
}

export default Component;
