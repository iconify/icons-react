import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q07bx_3ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q07bx_3ku"/>`,
		"fallback": "si:hourglass-fill",
	});
}

export default Component;
