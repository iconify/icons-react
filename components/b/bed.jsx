import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5z0mxbls.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5z0mxbls"/>`,
		"fallback": "wpf:bed",
	});
}

export default Component;
