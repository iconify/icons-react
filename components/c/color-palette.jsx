import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrqeybr-c.css';
import '../../css/o/o1embaboi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrqeybr-c"/><path class="o1embaboi"/>`,
		"fallback": "nimbus:color-palette",
	});
}

export default Component;
