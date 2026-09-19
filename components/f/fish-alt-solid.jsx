import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylx_4ubcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylx_4ubcm"/>`,
		"fallback": "flowbite:fish-alt-solid",
	});
}

export default Component;
