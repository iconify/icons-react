import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e1ki13b6w.css';
import '../../css/o/oqmbs9qpw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="e1ki13b6w"/><path class="oqmbs9qpw"/></g>`,
		"fallback": "cryptocurrency-color:gsc",
	});
}

export default Component;
