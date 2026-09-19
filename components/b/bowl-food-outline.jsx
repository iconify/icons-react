import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx96-_bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx96-_bvx"/>`,
		"fallback": "flowbite:bowl-food-outline",
	});
}

export default Component;
