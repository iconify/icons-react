import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbqzj5bhf.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1536 0) scale(-1 1)"><path class="wbqzj5bhf"/></g>`,
		"fallback": "fa:chevron-circle-right",
	});
}

export default Component;
