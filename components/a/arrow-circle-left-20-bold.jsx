import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/p/p4u925bnz.css';
import '../../css/q/q3p_-hbsr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="p4u925bnz"/><path class="q3p_-hbsr"/>`,
		"fallback": "energy-icons:arrow-circle-left-20-bold",
	});
}

export default Component;
