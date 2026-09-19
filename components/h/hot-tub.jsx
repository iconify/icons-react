import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbqo6nbyi.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbqo6nbyi"/>`,
		"fallback": "fa7-solid:hot-tub",
	});
}

export default Component;
