import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/irue1o-5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="irue1o-5n"/>`,
		"fallback": "mingcute:between-vertical-end-line",
	});
}

export default Component;
