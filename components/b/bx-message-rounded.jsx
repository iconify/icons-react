import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tuh_jbm9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tuh_jbm9y"/>`,
		"fallback": "bx:bx-message-rounded",
	});
}

export default Component;
