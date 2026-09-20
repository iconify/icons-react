import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unzlyb_8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unzlyb_8z"/>`,
		"fallback": "mage:exclamation-circle-fill",
	});
}

export default Component;
