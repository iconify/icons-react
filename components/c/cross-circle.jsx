import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/o/obwkopbuk.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="obwkopbuk"/></g>`,
		"fallback": "system-uicons:cross-circle",
	});
}

export default Component;
