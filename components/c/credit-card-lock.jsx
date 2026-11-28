import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni8h9jbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni8h9jbbe"/>`,
		"fallback": "noviair:credit-card-lock",
	});
}

export default Component;
