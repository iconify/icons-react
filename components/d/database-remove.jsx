import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx3zpmb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx3zpmb4i"/>`,
		"fallback": "mdi:database-remove",
	});
}

export default Component;
