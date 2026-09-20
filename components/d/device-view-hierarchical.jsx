import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzpx7ib5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzpx7ib5z"/>`,
		"fallback": "ix:device-view-hierarchical",
	});
}

export default Component;
