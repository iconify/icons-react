import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce1xaabbl.css';
import '../../css/b/b867kjo_f.css';
import '../../css/c/cpjozhbbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ce1xaabbl"/><path class="b867kjo_f"/><path class="cpjozhbbd"/></g>`,
		"fallback": "andrsrxn:eggs",
	});
}

export default Component;
