import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv3exrj3y.css';
import '../../css/i/it-d8emgh.css';
import '../../css/l/leiding1q.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/u/ujvr0vbtv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv3exrj3y"><path class="it-d8emgh"/><circle class="leiding1q"/></g><g class="x8poo_bjf"><circle class="leiding1q"/><path class="ujvr0vbtv"/></g>`,
		"fallback": "openmoji:heart-exclamation",
	});
}

export default Component;
