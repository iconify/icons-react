import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/t/t1g3ijj6x.css';
import '../../css/y/y-kc8tbqo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="t1g3ijj6x"/><path class="y-kc8tbqo"/></g>`,
		"fallback": "system-uicons:gift",
	});
}

export default Component;
