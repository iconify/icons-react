import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6rjw2b9s.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6rjw2b9s"/>`,
		"fallback": "system-uicons:arrow-bottom-left",
	});
}

export default Component;
