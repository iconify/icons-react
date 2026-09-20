import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrqv0rx5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrqv0rx5g"/>`,
		"fallback": "lucide:georgian-lari",
	});
}

export default Component;
