import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zynbnac3u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zynbnac3u"/>`,
		"fallback": "oi:cloud-upload",
	});
}

export default Component;
