import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/q/q_oe5x13h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="q_oe5x13h"/>`,
		"fallback": "energy-icons:clock-10-20-bold",
	});
}

export default Component;
