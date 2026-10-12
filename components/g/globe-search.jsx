import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4p0olbug.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/l/lyraz8bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4p0olbug"/><path class="u5h8llb9a"/><path class="lyraz8bov"/></g>`,
		"fallback": "andrsrxn:globe-search",
	});
}

export default Component;
