import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbp_debio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbp_debio"/>`,
		"fallback": "mingcute:inspect-line",
	});
}

export default Component;
