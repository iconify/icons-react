import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p480i1bck.css';
import '../../css/c/c9n0mybal.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p480i1bck"/><path class="c9n0mybal"/>`,
		"fallback": "energy-icons:ear-defenders-20-bold",
	});
}

export default Component;
