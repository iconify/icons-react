import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olkjptb9x.css';
import '../../css/e/ep58dcbkb.css';
import '../../css/j/j-md4pbor.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="olkjptb9x"/><path class="ep58dcbkb"/><path class="j-md4pbor"/></g>`,
		"fallback": "streamline-flex-color:arrow-roadmap",
	});
}

export default Component;
