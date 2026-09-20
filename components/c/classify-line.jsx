import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi0h6hbuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi0h6hbuf"/>`,
		"fallback": "mingcute:classify-line",
	});
}

export default Component;
