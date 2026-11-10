import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjbr0ef4z.css';
import '../../css/l/lh8muo0pg.css';
import '../../css/q/qi74fim5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kjbr0ef4z"/><path class="lh8muo0pg"/><path class="qi74fim5f"/></g>`,
		"fallback": "andrsrxn:fuel",
	});
}

export default Component;
