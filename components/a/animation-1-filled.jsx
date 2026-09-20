import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezx9wab7j.css';

const viewBox = {"width":24,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezx9wab7j"/>`,
		"fallback": "tdesign:animation-1-filled",
	});
}

export default Component;
