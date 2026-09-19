import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iecvh8biv.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iecvh8biv"/>`,
		"fallback": "whh:braillem",
	});
}

export default Component;
