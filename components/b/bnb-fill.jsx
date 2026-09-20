import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcj6_1b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcj6_1b1c"/>`,
		"fallback": "ri:bnb-fill",
	});
}

export default Component;
