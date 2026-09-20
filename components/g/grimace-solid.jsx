import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0my8sb8h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0my8sb8h"/>`,
		"fallback": "la:grimace-solid",
	});
}

export default Component;
