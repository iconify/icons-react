import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6q1_pb0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b6q1_pb0m"/>`,
		"fallback": "mingcute:edit-3-ai-fill",
	});
}

export default Component;
