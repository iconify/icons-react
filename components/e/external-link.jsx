import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cced90blf.css';
import '../../css/h/h4wi3-b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="cced90blf"/><path class="h4wi3-b1e"/></g>`,
		"fallback": "andrsrxn:external-link",
	});
}

export default Component;
