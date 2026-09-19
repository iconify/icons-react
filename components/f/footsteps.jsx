import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we8o7lxql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we8o7lxql"/>`,
		"fallback": "boxicons:footsteps",
	});
}

export default Component;
