import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4b0zsbme.css';
import '../../css/q/q9j565bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4b0zsbme"/><path class="q9j565bpq"/>`,
		"fallback": "solar:armchair-2-bold",
	});
}

export default Component;
