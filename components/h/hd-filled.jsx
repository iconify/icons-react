import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h717r1b5y.css';
import '../../css/q/qvcljuewd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h717r1b5y"/><path class="qvcljuewd"/>`,
		"fallback": "carbon:hd-filled",
	});
}

export default Component;
