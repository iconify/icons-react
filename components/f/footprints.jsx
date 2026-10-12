import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uspno3fed.css';
import '../../css/m/m7ok-ub8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uspno3fed"/><path class="m7ok-ub8h"/></g>`,
		"fallback": "andrsrxn:footprints",
	});
}

export default Component;
