import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5q2pxb9w.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5q2pxb9w"/>`,
		"fallback": "f7:cloud-upload-fill",
	});
}

export default Component;
