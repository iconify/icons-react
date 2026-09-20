import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/li7an9b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="li7an9b5l"/>`,
		"fallback": "mingcute:hat-fill",
	});
}

export default Component;
