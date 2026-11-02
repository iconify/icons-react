import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sucw5zbdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sucw5zbdx"/>`,
		"fallback": "mingcute:codepen-fill",
	});
}

export default Component;
