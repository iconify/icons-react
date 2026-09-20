import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb0fx9bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb0fx9bop"/>`,
		"fallback": "mdi:cursor-default-outline",
	});
}

export default Component;
