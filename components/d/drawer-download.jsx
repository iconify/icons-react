import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3o7b8xqv.css';
import '../../css/d/duazxfbrd.css';
import '../../css/a/a2zd00mlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3o7b8xqv"/><path class="duazxfbrd"/><path class="a2zd00mlc"/></g>`,
		"fallback": "streamline-freehand-color:drawer-download",
	});
}

export default Component;
