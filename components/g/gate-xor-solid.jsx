import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypwpt66ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypwpt66ao"/>`,
		"fallback": "iconaut:gate-xor-solid",
	});
}

export default Component;
