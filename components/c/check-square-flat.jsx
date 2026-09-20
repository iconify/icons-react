import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n22qpv41f.css';
import '../../css/o/o1lf7fb3q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n22qpv41f"/><path clip-rule="evenodd" class="o1lf7fb3q"/></g>`,
		"fallback": "streamline-color:check-square-flat",
	});
}

export default Component;
