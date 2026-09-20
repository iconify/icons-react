import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voj3xbb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voj3xbb6o"/>`,
		"fallback": "lucide:bed-single",
	});
}

export default Component;
