import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp09mjbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp09mjbvu"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`,
		"fallback": "svg-spinners:180-ring",
	});
}

export default Component;
