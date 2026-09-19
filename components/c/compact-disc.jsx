import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi9j9ccge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi9j9ccge"/>`,
		"fallback": "fa6-solid:compact-disc",
	});
}

export default Component;
