import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8kd97g9n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8kd97g9n st0"/>`,
		"fallback": "dashicons:insert",
	});
}

export default Component;
