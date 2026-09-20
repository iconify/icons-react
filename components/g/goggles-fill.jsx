import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s04r6fc4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s04r6fc4n"/>`,
		"fallback": "ri:goggles-fill",
	});
}

export default Component;
