import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj3g5vbpc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj3g5vbpc"/>`,
		"fallback": "simple-line-icons:feed",
	});
}

export default Component;
