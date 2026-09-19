import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-tflgzje.css';
import '../../css/p/png1nf7mm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-tflgzje"/><path class="png1nf7mm"/>`,
		"fallback": "ion:chevron-down-circle-outline",
	});
}

export default Component;
