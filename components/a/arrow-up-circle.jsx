import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/y/yzgy80rer.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="yzgy80rer"/></g>`,
		"fallback": "system-uicons:arrow-up-circle",
	});
}

export default Component;
