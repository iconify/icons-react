import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojukppbip.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojukppbip"/>`,
		"fallback": "fa7-solid:hand-holding",
	});
}

export default Component;
