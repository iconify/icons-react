import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-2wu0c7s.css';
import '../../css/k/ksujj2ycj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-2wu0c7s"/><path class="ksujj2ycj"/>`,
		"fallback": "carbon:event-incident",
	});
}

export default Component;
