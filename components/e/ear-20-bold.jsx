import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1xrsabpz.css';
import '../../css/u/ug018k_ll.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1xrsabpz"/><path class="ug018k_ll"/>`,
		"fallback": "energy-icons:ear-20-bold",
	});
}

export default Component;
