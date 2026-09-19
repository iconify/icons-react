import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/pdfib_b5n.css';
import '../../css/e/efl-uxvjp.css';
import '../../css/r/rzggd57gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="pdfib_b5n"/><path class="efl-uxvjp"/><circle transform="matrix(-1 0 0 1 21 16)" class="rzggd57gx"/></g>`,
		"fallback": "hugeicons:baseball-bat",
	});
}

export default Component;
