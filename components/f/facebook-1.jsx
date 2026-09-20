import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx6e5bb9k.css';
import '../../css/w/wma-ajb6j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx6e5bb9k"/><path class="wma-ajb6j"/></g>`,
		"fallback": "streamline-flex-color:facebook-1",
	});
}

export default Component;
