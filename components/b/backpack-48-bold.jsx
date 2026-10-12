import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur0oo-1qr.css';
import '../../css/q/quz16u80s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur0oo-1qr"/><path class="quz16u80s"/>`,
		"fallback": "energy-icons:backpack-48-bold",
	});
}

export default Component;
