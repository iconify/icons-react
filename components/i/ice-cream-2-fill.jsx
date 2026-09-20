import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5oj8v8lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o5oj8v8lj"/>`,
		"fallback": "mingcute:ice-cream-2-fill",
	});
}

export default Component;
