import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jhqoqhb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jhqoqhb3c"/>`,
		"fallback": "bxs:car-battery",
	});
}

export default Component;
