import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlmme1c1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlmme1c1s"/>`,
		"fallback": "lucide:arrow-up-right-from-square",
	});
}

export default Component;
