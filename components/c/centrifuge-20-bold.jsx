import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkkixhb6n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkkixhb6n"/>`,
		"fallback": "energy-icons:centrifuge-20-bold",
	});
}

export default Component;
