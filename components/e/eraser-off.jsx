import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlkhq1c-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlkhq1c-r"/>`,
		"fallback": "tabler:eraser-off",
	});
}

export default Component;
