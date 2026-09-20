import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gchjqtbuv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gchjqtbuv"/>`,
		"fallback": "solar:inbox-out-outline",
	});
}

export default Component;
