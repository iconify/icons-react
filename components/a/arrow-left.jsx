import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hue2x_wlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hue2x_wlz"/>`,
		"fallback": "reicon:arrow-left",
	});
}

export default Component;
