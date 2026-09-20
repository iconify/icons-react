import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxb66cbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxb66cbro"/>`,
		"fallback": "mingcute:heavy-rainstorm-line",
	});
}

export default Component;
