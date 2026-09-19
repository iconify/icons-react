import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc83sbcsy.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc83sbcsy"/>`,
		"fallback": "fa7-solid:headset",
	});
}

export default Component;
