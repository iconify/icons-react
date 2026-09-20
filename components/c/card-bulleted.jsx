import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-bkw3zgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-bkw3zgu"/>`,
		"fallback": "mdi:card-bulleted",
	});
}

export default Component;
