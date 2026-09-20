import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwe-4gc3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwe-4gc3n"/>`,
		"fallback": "mingcute:certificate-2-line",
	});
}

export default Component;
