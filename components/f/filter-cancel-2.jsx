import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3r2uwbvw.css';
import '../../css/x/x6m8sibuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3r2uwbvw"/><path clip-rule="evenodd" class="x6m8sibuz"/></g>`,
		"fallback": "proicons:filter-cancel-2",
	});
}

export default Component;
