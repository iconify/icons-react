import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a39x7accg.css';
import '../../css/w/w3pk7wb9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a39x7accg"/><path class="w3pk7wb9n"/>`,
		"fallback": "boxicons:arrow-up-narrow-wide",
	});
}

export default Component;
