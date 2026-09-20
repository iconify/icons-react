import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgrv538an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgrv538an"/>`,
		"fallback": "mdi:cloud-lock",
	});
}

export default Component;
