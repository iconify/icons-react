import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fha8je6yo.css';
import '../../css/r/rp9wifbto.css';
import '../../css/u/u7x_1nf0m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fha8je6yo"/><path class="rp9wifbto"/><path class="u7x_1nf0m"/></g>`,
		"fallback": "streamline-color:flip-vertical-circle-1",
	});
}

export default Component;
