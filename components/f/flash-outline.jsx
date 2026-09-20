import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uup9sabri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uup9sabri"/>`,
		"fallback": "mdi:flash-outline",
	});
}

export default Component;
