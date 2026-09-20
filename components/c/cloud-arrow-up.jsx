import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dved3o4nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dved3o4nz"/>`,
		"fallback": "mdi:cloud-arrow-up",
	});
}

export default Component;
