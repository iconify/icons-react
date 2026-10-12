import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8d9u7bdg.css';
import '../../css/e/eu24tmeaa.css';
import '../../css/b/bd2pqjhnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p8d9u7bdg"/><path class="eu24tmeaa"/><path class="bd2pqjhnu"/></g>`,
		"fallback": "andrsrxn:bell-silent",
	});
}

export default Component;
