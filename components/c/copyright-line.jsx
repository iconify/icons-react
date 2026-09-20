import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jujh6sb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jujh6sb8r"/>`,
		"fallback": "mingcute:copyright-line",
	});
}

export default Component;
