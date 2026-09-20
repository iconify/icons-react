import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejwog5b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejwog5b-c"/>`,
		"fallback": "mingcute:edit-3-line",
	});
}

export default Component;
