import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx3nvbcpa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx3nvbcpa"/>`,
		"fallback": "fa7-solid:gun",
	});
}

export default Component;
