import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo2yj5prd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo2yj5prd"/>`,
		"fallback": "icons8:camera",
	});
}

export default Component;
