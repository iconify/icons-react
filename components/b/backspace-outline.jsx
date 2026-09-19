import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1mehsijf.css';
import '../../css/q/qqdio8bdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1mehsijf"/><path class="qqdio8bdx"/>`,
		"fallback": "ion:backspace-outline",
	});
}

export default Component;
