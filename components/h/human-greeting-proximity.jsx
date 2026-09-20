import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzx8o9bvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzx8o9bvv"/>`,
		"fallback": "mdi:human-greeting-proximity",
	});
}

export default Component;
