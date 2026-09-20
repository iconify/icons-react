import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjh5ppb_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjh5ppb_r"/>`,
		"fallback": "mdi:hexagon-slice-2",
	});
}

export default Component;
