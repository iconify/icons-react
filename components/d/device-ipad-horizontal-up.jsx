import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4gquy6oe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4gquy6oe"/>`,
		"fallback": "tabler:device-ipad-horizontal-up",
	});
}

export default Component;
