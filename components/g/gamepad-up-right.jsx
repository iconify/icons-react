import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2511yb0m.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2511yb0m"/>`,
		"fallback": "memory:gamepad-up-right",
	});
}

export default Component;
