import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdwsu1u1l.css';
import '../../css/x/x5y8bwbsk.css';
import '../../css/f/f1rdqjblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdwsu1u1l"/><path class="x5y8bwbsk"/><path class="f1rdqjblo"/></g>`,
		"fallback": "andrsrxn:gallery-play",
	});
}

export default Component;
