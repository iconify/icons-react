import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk3i3-mbd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk3i3-mbd"/>`,
		"fallback": "osmic:books-14",
	});
}

export default Component;
