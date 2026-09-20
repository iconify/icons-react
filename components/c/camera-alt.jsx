import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/fznqy25zh.css';
import '../../css/g/ghyfpgkfd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="fznqy25zh"/><path class="ghyfpgkfd"/></g>`,
		"fallback": "system-uicons:camera-alt",
	});
}

export default Component;
