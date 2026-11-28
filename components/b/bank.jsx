import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6zv2nlgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6zv2nlgv"/>`,
		"fallback": "noviair-light:bank",
	});
}

export default Component;
