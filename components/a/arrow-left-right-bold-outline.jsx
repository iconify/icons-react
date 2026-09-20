import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg3jmh0xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg3jmh0xv"/>`,
		"fallback": "mdi:arrow-left-right-bold-outline",
	});
}

export default Component;
