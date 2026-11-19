import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1kzsmy6e.css';
import '../../css/b/bjwi9bbqs.css';
import '../../css/k/kk0vjob3o.css';
import '../../css/j/jas2y1bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x1kzsmy6e"/><path clip-rule="evenodd" class="bjwi9bbqs"/><path class="kk0vjob3o"/><path class="jas2y1bjl"/></g>`,
		"fallback": "andrsrxn:apple-scan",
	});
}

export default Component;
