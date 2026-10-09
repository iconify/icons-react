import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a37an34lq.css';
import '../../css/l/lkqfabbbe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a37an34lq"/><path class="lkqfabbbe"/>`,
		"fallback": "energy-icons:cheese-20-bold",
	});
}

export default Component;
