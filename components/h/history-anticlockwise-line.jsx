import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj4txcc8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gj4txcc8s"/>`,
		"fallback": "mingcute:history-anticlockwise-line",
	});
}

export default Component;
