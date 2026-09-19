import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/coatur0dk.css';
import '../../css/a/amwvzj90s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="coatur0dk"/><path class="amwvzj90s"/></g>`,
		"fallback": "flowbite:floppy-disk-outline",
	});
}

export default Component;
