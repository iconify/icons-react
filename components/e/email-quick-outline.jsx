import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho9c_64qe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho9c_64qe"/>`,
		"fallback": "mdi:email-quick-outline",
	});
}

export default Component;
