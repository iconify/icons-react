import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q76ry8bfm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q76ry8bfm"/>`,
		"fallback": "system-uicons:cloud-upload-alt",
	});
}

export default Component;
