import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyu-l7b1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyu-l7b1n"/>`,
		"fallback": "selfhst:heimdall-light",
	});
}

export default Component;
