import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxv23u_pp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxv23u_pp"/>`,
		"fallback": "mdi:cake-layered",
	});
}

export default Component;
