import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2__uqr2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2__uqr2c"/>`,
		"fallback": "mdi:infinity",
	});
}

export default Component;
