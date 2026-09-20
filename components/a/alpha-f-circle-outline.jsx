import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-pem9bhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-pem9bhj"/>`,
		"fallback": "mdi:alpha-f-circle-outline",
	});
}

export default Component;
