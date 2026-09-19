import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y75p7nnij.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y75p7nnij"/>`,
		"fallback": "ant-design:fall-outline",
	});
}

export default Component;
