import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wloq5pbdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wloq5pbdz"/>`,
		"fallback": "mdi:decrement",
	});
}

export default Component;
