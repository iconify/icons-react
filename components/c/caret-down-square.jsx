import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0apn84ov.css';
import '../../css/v/vku8ojb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0apn84ov"/><path class="vku8ojb7x"/>`,
		"fallback": "boxicons:caret-down-square",
	});
}

export default Component;
