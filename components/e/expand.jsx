import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h53r0d9bu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h53r0d9bu"/>`,
		"fallback": "quill:expand",
	});
}

export default Component;
