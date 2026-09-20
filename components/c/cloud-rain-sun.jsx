import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmmx76bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmmx76bjk"/>`,
		"fallback": "uil:cloud-rain-sun",
	});
}

export default Component;
