import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbykz53it.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbykz53it"/>`,
		"fallback": "fa7-solid:cow",
	});
}

export default Component;
