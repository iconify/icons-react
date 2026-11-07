import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8ojm6b_c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8ojm6b_c"/>`,
		"fallback": "pinhead:bicycle-in-eaved-leanto-building",
	});
}

export default Component;
