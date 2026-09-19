import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9jx4mbxy.css';

const viewBox = {"width":192,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9jx4mbxy"/>`,
		"fallback": "fa-solid:info",
	});
}

export default Component;
