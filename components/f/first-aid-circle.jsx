import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2xtk0bdd.css';
import '../../css/c/cz2d2khri.css';
import '../../css/n/n_1mlcb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2xtk0bdd"/><path class="cz2d2khri"/><path class="n_1mlcb-b"/></g>`,
		"fallback": "andrsrxn:first-aid-circle",
	});
}

export default Component;
