import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/przyyv_dt.css';
import '../../css/l/l1hdjsbba.css';
import '../../css/b/b6tr4rb1y.css';
import '../../css/h/h20z8sbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="przyyv_dt"/><path class="l1hdjsbba"/><path class="b6tr4rb1y"/><path class="h20z8sbjg"/></g>`,
		"fallback": "andrsrxn:book-user",
	});
}

export default Component;
