import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yasmj2z1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yasmj2z1k"/>`,
		"fallback": "keyline-icons:inbox",
	});
}

export default Component;
