import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htms3obeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htms3obeh"/>`,
		"fallback": "bxl:framer",
	});
}

export default Component;
