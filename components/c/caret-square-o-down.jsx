import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glk2itbjq.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 1536) scale(1 -1)"><path class="glk2itbjq"/></g>`,
		"fallback": "fa:caret-square-o-down",
	});
}

export default Component;
