import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6r356-xy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6r356-xy"/>`,
		"fallback": "streamline-ultimate:envelope-letter-bold",
	});
}

export default Component;
