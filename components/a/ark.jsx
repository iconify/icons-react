import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvdx2wb4b.css';
import '../../css/n/nrqodablg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mvdx2wb4b"/><path class="nrqodablg"/></g>`,
		"fallback": "cryptocurrency-color:ark",
	});
}

export default Component;
