import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn7g_cbkb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn7g_cbkb"/>`,
		"fallback": "simple-line-icons:action-redo",
	});
}

export default Component;
