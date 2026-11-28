import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a23eap52e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a23eap52e primary"/>`,
		"fallback": "iconaut:arrow-right-to-line-duotone",
	});
}

export default Component;
