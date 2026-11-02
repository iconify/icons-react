import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgrzl2o3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgrzl2o3n"/>`,
		"fallback": "mingcute:book-x-line",
	});
}

export default Component;
