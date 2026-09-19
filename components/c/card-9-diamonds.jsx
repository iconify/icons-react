import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y05w8bbrv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y05w8bbrv"/>`,
		"fallback": "game-icons:card-9-diamonds",
	});
}

export default Component;
