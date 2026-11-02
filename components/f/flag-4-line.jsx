import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osp5j8bui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osp5j8bui"/>`,
		"fallback": "mingcute:flag-4-line",
	});
}

export default Component;
