import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrz1_6xna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrz1_6xna"/>`,
		"fallback": "mingcute:badge-indian-rupee-fill",
	});
}

export default Component;
