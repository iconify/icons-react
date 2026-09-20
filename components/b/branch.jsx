import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/v/v4aidkk0v.css';
import '../../css/j/j0a0itbka.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="v4aidkk0v"/><path class="j0a0itbka"/></g>`,
		"fallback": "system-uicons:branch",
	});
}

export default Component;
