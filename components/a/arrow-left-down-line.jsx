import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aancabc5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aancabc5v"/>`,
		"fallback": "mingcute:arrow-left-down-line",
	});
}

export default Component;
