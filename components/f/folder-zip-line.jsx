import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8hc56mpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8hc56mpx"/>`,
		"fallback": "mingcute:folder-zip-line",
	});
}

export default Component;
