import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxmqqxb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxmqqxb6g"/>`,
		"fallback": "mingcute:brush-3-ai-fill",
	});
}

export default Component;
