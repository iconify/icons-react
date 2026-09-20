import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0xa18b2c.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0xa18b2c"/>`,
		"fallback": "iwwa:delete",
	});
}

export default Component;
