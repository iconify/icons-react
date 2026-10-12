import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdzryzc9x.css';
import '../../css/h/h53m_jkny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wdzryzc9x"/><path class="h53m_jkny"/></g>`,
		"fallback": "andrsrxn:book-plus",
	});
}

export default Component;
