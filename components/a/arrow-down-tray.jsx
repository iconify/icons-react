import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhoebv3dh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhoebv3dh"/>`,
		"fallback": "heroicons-outline:arrow-down-tray",
	});
}

export default Component;
