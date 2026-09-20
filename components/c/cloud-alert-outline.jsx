import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb-_z3bgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb-_z3bgo"/>`,
		"fallback": "mdi:cloud-alert-outline",
	});
}

export default Component;
