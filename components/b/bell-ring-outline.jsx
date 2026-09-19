import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al0-lwb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al0-lwb_v"/>`,
		"fallback": "flowbite:bell-ring-outline",
	});
}

export default Component;
