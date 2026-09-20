import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py12r-b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py12r-b5c"/>`,
		"fallback": "mdi:fridge-off",
	});
}

export default Component;
