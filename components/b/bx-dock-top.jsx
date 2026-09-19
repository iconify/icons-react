import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdfr1w_pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdfr1w_pc"/>`,
		"fallback": "bx:bx-dock-top",
	});
}

export default Component;
