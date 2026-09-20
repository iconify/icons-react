import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4qg93bno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4qg93bno"/>`,
		"fallback": "mdi:circle-edit-outline",
	});
}

export default Component;
