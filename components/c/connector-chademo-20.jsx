import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_nd-1x5c.css';
import '../../css/y/ybmr-8bzd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_nd-1x5c"/><path class="ybmr-8bzd"/>`,
		"fallback": "energy-icons:connector-chademo-20",
	});
}

export default Component;
