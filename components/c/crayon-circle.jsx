import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpu5gubso.css';
import '../../css/k/kanmdxout.css';
import '../../css/b/bn6ldsbuk.css';
import '../../css/g/gvs3lc1zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bpu5gubso"/><path class="kanmdxout"/><path class="bn6ldsbuk"/><path class="gvs3lc1zc"/></g>`,
		"fallback": "andrsrxn:crayon-circle",
	});
}

export default Component;
