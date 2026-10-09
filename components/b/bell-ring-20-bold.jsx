import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/waxdi_b3y.css';
import '../../css/d/dqbca823b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="waxdi_b3y"/><path class="dqbca823b"/>`,
		"fallback": "energy-icons:bell-ring-20-bold",
	});
}

export default Component;
