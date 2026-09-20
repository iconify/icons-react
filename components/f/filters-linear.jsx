import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29j--52h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29j--52h"/>`,
		"fallback": "solar:filters-linear",
	});
}

export default Component;
