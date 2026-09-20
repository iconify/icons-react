import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gok6tprfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gok6tprfi"/>`,
		"fallback": "uil:car-sideview",
	});
}

export default Component;
