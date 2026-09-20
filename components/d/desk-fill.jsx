import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ezagl5fce.css';
import '../../css/m/mpcyzw4mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ezagl5fce"/><path clip-rule="evenodd" class="mpcyzw4mw"/></g>`,
		"fallback": "lets-icons:desk-fill",
	});
}

export default Component;
