import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3hoi0mvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3hoi0mvb"/>`,
		"fallback": "mingcute:file-check-line",
	});
}

export default Component;
