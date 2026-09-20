import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/m2miwmpjv.css';
import '../../css/a/ac-e7bk8s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="m2miwmpjv"/><path class="ac-e7bk8s"/></g>`,
		"fallback": "system-uicons:cylinder",
	});
}

export default Component;
