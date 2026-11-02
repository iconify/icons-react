import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orkb68b7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orkb68b7l"/>`,
		"fallback": "mingcute:globe-lock-line",
	});
}

export default Component;
