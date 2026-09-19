import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfsdvg5tk.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfsdvg5tk"/>`,
		"fallback": "fa6-solid:book-medical",
	});
}

export default Component;
