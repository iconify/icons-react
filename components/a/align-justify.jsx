import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8e-g6_ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8e-g6_ux"/>`,
		"fallback": "withicons-kawaii:align-justify",
	});
}

export default Component;
