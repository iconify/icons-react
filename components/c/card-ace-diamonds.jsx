import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gof7yqdxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gof7yqdxi"/>`,
		"fallback": "game-icons:card-ace-diamonds",
	});
}

export default Component;
