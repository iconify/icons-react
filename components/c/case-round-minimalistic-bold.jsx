import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkai44buu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkai44buu"/>`,
		"fallback": "solar:case-round-minimalistic-bold",
	});
}

export default Component;
