import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcg0lcc6u.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcg0lcc6u"/>`,
		"fallback": "iwwa:close-braket",
	});
}

export default Component;
