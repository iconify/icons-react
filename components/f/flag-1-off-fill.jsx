import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1rb0qbyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1rb0qbyv"/>`,
		"fallback": "mingcute:flag-1-off-fill",
	});
}

export default Component;
