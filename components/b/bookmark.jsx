import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jbmv-ibhe.css';
import '../../css/e/eux9e1adm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jbmv-ibhe"/><path class="eux9e1adm"/></g>`,
		"fallback": "andrsrxn:bookmark",
	});
}

export default Component;
