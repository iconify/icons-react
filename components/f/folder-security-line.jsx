import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-ehv5-sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-ehv5-sk"/>`,
		"fallback": "mingcute:folder-security-line",
	});
}

export default Component;
