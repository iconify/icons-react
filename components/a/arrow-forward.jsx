import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_f4g8b1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_f4g8b1v"/>`,
		"fallback": "ion:arrow-forward",
	});
}

export default Component;
