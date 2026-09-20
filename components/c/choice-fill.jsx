import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jie5d7b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jie5d7b6l"/>`,
		"fallback": "mingcute:choice-fill",
	});
}

export default Component;
