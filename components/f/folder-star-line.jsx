import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oms3i8bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oms3i8bby"/>`,
		"fallback": "mingcute:folder-star-line",
	});
}

export default Component;
