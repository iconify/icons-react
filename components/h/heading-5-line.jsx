import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qn-l5uixg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qn-l5uixg"/>`,
		"fallback": "mingcute:heading-5-line",
	});
}

export default Component;
