import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5qeanbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5qeanbhi"/>`,
		"fallback": "mingcute:drop-line",
	});
}

export default Component;
