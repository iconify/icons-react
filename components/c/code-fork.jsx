import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2hu5m5ov.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2hu5m5ov"/>`,
		"fallback": "fa6-solid:code-fork",
	});
}

export default Component;
