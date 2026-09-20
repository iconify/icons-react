import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf-9d60ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf-9d60ns"/>`,
		"fallback": "lucide:book-plus",
	});
}

export default Component;
