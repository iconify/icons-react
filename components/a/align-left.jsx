import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhqe3lmxn.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhqe3lmxn"/>`,
		"fallback": "fa-solid:align-left",
	});
}

export default Component;
