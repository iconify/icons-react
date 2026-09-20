import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi25h3nne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi25h3nne"/>`,
		"fallback": "mingcute:hop-line",
	});
}

export default Component;
