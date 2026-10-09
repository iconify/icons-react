import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/s/st2i8hbce.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="st2i8hbce"/>`,
		"fallback": "energy-icons:chevron-down-circle-20-bold",
	});
}

export default Component;
