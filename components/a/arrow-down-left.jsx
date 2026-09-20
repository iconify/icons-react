import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-z22-bve.css';

const viewBox = {"width":24,"height":24,"left":-6.5,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-z22-bve"/>`,
		"fallback": "jam:arrow-down-left",
	});
}

export default Component;
