import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5h96bxu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5h96bxu"/>`,
		"fallback": "mingcute:arow-to-right-fill",
	});
}

export default Component;
