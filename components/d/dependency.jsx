import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u3b-ufbpy.css';
import '../../css/l/lyaept3_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u3b-ufbpy"/><path class="lyaept3_f"/></g>`,
		"fallback": "andrsrxn:dependency",
	});
}

export default Component;
