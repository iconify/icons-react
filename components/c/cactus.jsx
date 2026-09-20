import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeo0tq68l.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qeo0tq68l"/>`,
		"fallback": "picon:cactus",
	});
}

export default Component;
