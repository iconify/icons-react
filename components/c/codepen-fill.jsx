import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pie-r5bft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pie-r5bft"/>`,
		"fallback": "mingcute:codepen-fill",
	});
}

export default Component;
