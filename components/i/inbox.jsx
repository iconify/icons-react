import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw1y29zya.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw1y29zya"/>`,
		"fallback": "fa7-solid:inbox",
	});
}

export default Component;
