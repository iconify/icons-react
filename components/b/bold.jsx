import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo-m8hbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo-m8hbbh"/>`,
		"fallback": "uil:bold",
	});
}

export default Component;
