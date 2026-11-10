import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/me0p8sgcq.css';
import '../../css/f/fr863j2ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="me0p8sgcq"/><path class="fr863j2ty"/></g>`,
		"fallback": "andrsrxn:battery-low",
	});
}

export default Component;
