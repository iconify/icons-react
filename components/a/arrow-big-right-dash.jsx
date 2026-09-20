import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iyqog2bgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iyqog2bgy"/>`,
		"fallback": "lucide:arrow-big-right-dash",
	});
}

export default Component;
