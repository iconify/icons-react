import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/haq88g9dp.css';
import '../../css/a/aij_r7bng.css';
import '../../css/r/rp774jbno.css';
import '../../css/h/h20z8sbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="haq88g9dp"/><path class="aij_r7bng"/><path class="rp774jbno"/><path class="h20z8sbjg"/></g>`,
		"fallback": "andrsrxn:book-user",
	});
}

export default Component;
