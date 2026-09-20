import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baev--_qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baev--_qi"/>`,
		"fallback": "mingcute:arrow-right-down-circle-line",
	});
}

export default Component;
