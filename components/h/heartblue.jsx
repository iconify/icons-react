import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-lwsub9k.css';
import '../../css/e/e3net-b-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-lwsub9k"/><path class="e3net-b-i"/>`,
		"fallback": "fxemoji:heartblue",
	});
}

export default Component;
