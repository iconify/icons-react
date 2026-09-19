import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juv3elbto.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juv3elbto"/><path class="q-tflgzje"/>`,
		"fallback": "famicons:arrow-undo-circle-outline",
	});
}

export default Component;
