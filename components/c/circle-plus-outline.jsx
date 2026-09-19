import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwou52g1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwou52g1n"/>`,
		"fallback": "flowbite:circle-plus-outline",
	});
}

export default Component;
