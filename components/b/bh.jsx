import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7hinzb1w.css';
import '../../css/g/g1myj0bgn.css';

const viewBox = {"width":301,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7hinzb1w"/><path class="g1myj0bgn"/></g>`,
		"fallback": "cif:bh",
	});
}

export default Component;
