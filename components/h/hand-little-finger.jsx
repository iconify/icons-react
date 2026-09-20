import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m26zf4yei.css';
import '../../css/o/odibfhbmi.css';
import '../../css/c/czl7urd3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m26zf4yei"/><path class="odibfhbmi"/><path class="czl7urd3e"/>`,
		"fallback": "streamline-pixel:hand-little-finger",
	});
}

export default Component;
