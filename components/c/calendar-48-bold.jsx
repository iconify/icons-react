import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwjkdv1oe.css';
import '../../css/g/gslqnkb2v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwjkdv1oe"/><path class="gslqnkb2v"/>`,
		"fallback": "energy-icons:calendar-48-bold",
	});
}

export default Component;
