import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en88-6cnx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en88-6cnx"/>`,
		"fallback": "ri:ghost-4-fill",
	});
}

export default Component;
