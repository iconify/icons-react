import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcpvd8l-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcpvd8l-m"/>`,
		"fallback": "noviair-light:arrow-down-left",
	});
}

export default Component;
