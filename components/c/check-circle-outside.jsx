import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/t/t7q-akbba.css';
import '../../css/a/auk9ztbdv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="t7q-akbba"/><path class="auk9ztbdv"/></g>`,
		"fallback": "system-uicons:check-circle-outside",
	});
}

export default Component;
