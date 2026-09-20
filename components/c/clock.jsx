import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i2qezbnqp.css';
import '../../css/z/zr5f84pqd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(-1 0 0 1 19 2)" class="jtowsomii"><circle class="i2qezbnqp"/><path class="zr5f84pqd"/></g>`,
		"fallback": "system-uicons:clock",
	});
}

export default Component;
