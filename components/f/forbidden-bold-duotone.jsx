import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-lbvibdh.css';
import '../../css/i/i-d-6-4rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-lbvibdh"/><path class="i-d-6-4rx"/>`,
		"fallback": "solar:forbidden-bold-duotone",
	});
}

export default Component;
