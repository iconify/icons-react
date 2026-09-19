import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8eg9ma1e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8eg9ma1e"/>`,
		"fallback": "fa7-solid:backward",
	});
}

export default Component;
