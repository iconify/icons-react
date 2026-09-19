import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxpzb8bvo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxpzb8bvo"/>`,
		"fallback": "fa7-solid:check-double",
	});
}

export default Component;
