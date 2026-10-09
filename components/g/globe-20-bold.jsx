import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/a/aifrzk3-i.css';
import '../../css/a/atyqr0b1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="aifrzk3-i"/><path class="atyqr0b1r"/>`,
		"fallback": "energy-icons:globe-20-bold",
	});
}

export default Component;
