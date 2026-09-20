import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp6bw1b4l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp6bw1b4l"/>`,
		"fallback": "uiw:coffee",
	});
}

export default Component;
