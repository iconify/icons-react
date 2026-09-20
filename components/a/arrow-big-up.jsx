import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik0528buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik0528buj"/>`,
		"fallback": "lucide:arrow-big-up",
	});
}

export default Component;
