import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6g8vfs6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6g8vfs6i"/>`,
		"fallback": "mingcute:copy-line",
	});
}

export default Component;
