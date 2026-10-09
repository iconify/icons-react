import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9bjgs55a.css';
import '../../css/w/wmiwqfb-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9bjgs55a"/><path class="wmiwqfb-m"/>`,
		"fallback": "energy-icons:arrow-up-left-48",
	});
}

export default Component;
