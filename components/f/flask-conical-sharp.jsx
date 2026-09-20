import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgv6vubxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgv6vubxn"/>`,
		"fallback": "keyline-icons:flask-conical-sharp",
	});
}

export default Component;
