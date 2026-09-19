import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-tflgzje.css';
import '../../css/w/wv95f72ao.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-tflgzje"/><path class="wv95f72ao"/>`,
		"fallback": "famicons:chevron-back-circle-outline",
	});
}

export default Component;
