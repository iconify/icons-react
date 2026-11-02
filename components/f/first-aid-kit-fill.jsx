import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbncq7b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbncq7b1c"/>`,
		"fallback": "mingcute:first-aid-kit-fill",
	});
}

export default Component;
