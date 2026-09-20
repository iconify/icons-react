import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh7wwmh2d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rh7wwmh2d"/>`,
		"fallback": "streamline-plump:food-truck-event-fair-remix",
	});
}

export default Component;
