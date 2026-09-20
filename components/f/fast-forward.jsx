import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upv6j8a-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upv6j8a-o"/>`,
		"fallback": "prime:fast-forward",
	});
}

export default Component;
