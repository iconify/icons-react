import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo1gldv5s.css';
import '../../css/f/fjkjw2x4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo1gldv5s"/><path class="fjkjw2x4u"/>`,
		"fallback": "energy-icons:crane-hook-48",
	});
}

export default Component;
