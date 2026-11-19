import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bou1e0bkp.css';
import '../../css/x/x3__3mamu.css';
import '../../css/b/blitqvboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bou1e0bkp"/><path class="x3__3mamu"/><path class="blitqvboq"/></g>`,
		"fallback": "andrsrxn:creative-commons-by",
	});
}

export default Component;
