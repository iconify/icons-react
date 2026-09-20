import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/a/a0a7pbcab.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="a0a7pbcab"/></g>`,
		"fallback": "system-uicons:arrow-left-circle",
	});
}

export default Component;
