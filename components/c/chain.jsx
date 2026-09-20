import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/s/smcouc45j.css';
import '../../css/y/y_7n8kb8j.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="smcouc45j"/><path class="y_7n8kb8j"/></g>`,
		"fallback": "system-uicons:chain",
	});
}

export default Component;
