import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8-yow--l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8-yow--l"/>`,
		"fallback": "keyline-icons:grid-2x2-sharp",
	});
}

export default Component;
