import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otvdx4b6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otvdx4b6d"/>`,
		"fallback": "mdi:atom",
	});
}

export default Component;
