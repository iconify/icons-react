import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyj8x5bwy.css';
import '../../css/p/pp-w--bzw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pyj8x5bwy"/><path class="pp-w--bzw"/></g>`,
		"fallback": "streamline-color:cards-flat",
	});
}

export default Component;
