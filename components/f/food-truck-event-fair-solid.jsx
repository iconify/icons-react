import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plua0oiay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="plua0oiay"/>`,
		"fallback": "streamline-plump:food-truck-event-fair-solid",
	});
}

export default Component;
