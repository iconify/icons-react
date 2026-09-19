import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8ezhpb5o.css';
import '../../css/c/ch6_fcbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8ezhpb5o"/><path class="ch6_fcbjy"/>`,
		"fallback": "bx:bx-message-alt-add",
	});
}

export default Component;
