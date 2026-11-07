import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a510ge4pz.css';
import '../../css/m/mnpe9tboq.css';
import '../../css/k/k324ub9yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a510ge4pz"/><path class="mnpe9tboq"/><path class="k324ub9yz"/>`,
		"fallback": "solar:code-2-bold",
	});
}

export default Component;
