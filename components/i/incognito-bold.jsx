import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4q89bt3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l4q89bt3a"/>`,
		"fallback": "solar:incognito-bold",
	});
}

export default Component;
