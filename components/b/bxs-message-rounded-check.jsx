import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsvbu8byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsvbu8byk"/>`,
		"fallback": "bx:bxs-message-rounded-check",
	});
}

export default Component;
