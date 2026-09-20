import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_88jdbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_88jdbml"/>`,
		"fallback": "solar:cursor-bold",
	});
}

export default Component;
