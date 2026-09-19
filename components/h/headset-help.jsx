import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q09r_w8dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q09r_w8dz"/>`,
		"fallback": "iconoir:headset-help",
	});
}

export default Component;
