import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e29a1ibtw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e29a1ibtw"/>`,
		"fallback": "simple-line-icons:hourglass",
	});
}

export default Component;
