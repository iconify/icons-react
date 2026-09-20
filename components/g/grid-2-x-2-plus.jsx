import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-myih1aj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-myih1aj"/>`,
		"fallback": "lucide:grid-2-x-2-plus",
	});
}

export default Component;
