import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wozf3nhyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wozf3nhyh"/>`,
		"fallback": "mingcute:celebrate-fill",
	});
}

export default Component;
