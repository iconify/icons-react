import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1tpi1b0v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1tpi1b0v"/>`,
		"fallback": "fa6-regular:face-grin-squint-tears",
	});
}

export default Component;
