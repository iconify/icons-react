import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap50jdwsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap50jdwsh"/>`,
		"fallback": "mingcute:file-security-line",
	});
}

export default Component;
