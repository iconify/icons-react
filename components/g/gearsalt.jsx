import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0ddrwbfa.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0ddrwbfa"/>`,
		"fallback": "whh:gearsalt",
	});
}

export default Component;
