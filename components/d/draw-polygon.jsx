import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux7dz1b3h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux7dz1b3h"/>`,
		"fallback": "la:draw-polygon",
	});
}

export default Component;
