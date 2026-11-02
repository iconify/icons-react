import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhkkm6b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhkkm6b5w"/>`,
		"fallback": "mingcute:chart-vertical-2-line",
	});
}

export default Component;
