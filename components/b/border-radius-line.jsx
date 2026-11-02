import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr30rzbwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr30rzbwx"/>`,
		"fallback": "mingcute:border-radius-line",
	});
}

export default Component;
