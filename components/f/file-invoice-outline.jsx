import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/woue8qb2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="woue8qb2o"/>`,
		"fallback": "flowbite:file-invoice-outline",
	});
}

export default Component;
