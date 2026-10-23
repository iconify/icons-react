import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjpejac3h.css';
import '../../css/f/f0knz3bso.css';
import '../../css/u/u2qtwobuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjpejac3h"/><path class="f0knz3bso"/><path class="u2qtwobuk"/></g>`,
		"fallback": "andrsrxn:chevron-end-double-circle",
	});
}

export default Component;
