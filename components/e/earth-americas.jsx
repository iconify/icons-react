import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6bto8c_s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6bto8c_s"/>`,
		"fallback": "fa7-solid:earth-americas",
	});
}

export default Component;
