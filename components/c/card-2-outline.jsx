import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_59mhbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_59mhbgm"/>`,
		"fallback": "solar:card-2-outline",
	});
}

export default Component;
