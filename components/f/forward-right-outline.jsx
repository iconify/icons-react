import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdio18b-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pdio18b-v"/>`,
		"fallback": "solar:forward-right-outline",
	});
}

export default Component;
