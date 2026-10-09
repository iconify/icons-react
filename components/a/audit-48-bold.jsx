import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwgv7ib-v.css';
import '../../css/v/vk1vhpblr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwgv7ib-v"/><path class="vk1vhpblr"/>`,
		"fallback": "energy-icons:audit-48-bold",
	});
}

export default Component;
