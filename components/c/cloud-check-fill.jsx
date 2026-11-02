import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzxifmecn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzxifmecn"/>`,
		"fallback": "mingcute:cloud-check-fill",
	});
}

export default Component;
