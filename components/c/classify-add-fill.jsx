import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygt2iabqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygt2iabqo"/>`,
		"fallback": "mingcute:classify-add-fill",
	});
}

export default Component;
