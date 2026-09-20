import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slz8b_t7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="slz8b_t7a"/>`,
		"fallback": "solar:cloud-sun-outline",
	});
}

export default Component;
