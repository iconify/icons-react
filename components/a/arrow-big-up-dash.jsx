import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgv5jea1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgv5jea1s"/>`,
		"fallback": "lucide:arrow-big-up-dash",
	});
}

export default Component;
