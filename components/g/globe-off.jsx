import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8d3t5s1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8d3t5s1t"/>`,
		"fallback": "noviair:globe-off",
	});
}

export default Component;
