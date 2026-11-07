import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5ica_b2j.css';
import '../../css/i/irrkctldn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5ica_b2j"/><path class="irrkctldn"/>`,
		"fallback": "solar:book-2-bold",
	});
}

export default Component;
