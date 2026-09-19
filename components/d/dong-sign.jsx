import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k849r4bxl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k849r4bxl"/>`,
		"fallback": "fa7-solid:dong-sign",
	});
}

export default Component;
