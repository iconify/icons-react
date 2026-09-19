import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyji3vb3h.css';
import '../../css/b/b3dn0_1qr.css';
import '../../css/e/e1a212beq.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nyji3vb3h"><path class="b3dn0_1qr"/><path class="e1a212beq"/></g>`,
		"fallback": "devicon:canva",
	});
}

export default Component;
