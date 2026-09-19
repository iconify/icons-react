import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/timynoxoa.css';

const viewBox = {"width":2048,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="timynoxoa"/>`,
		"fallback": "fa:cc",
	});
}

export default Component;
