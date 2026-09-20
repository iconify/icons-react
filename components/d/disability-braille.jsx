import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lw5nmrbbq.css';
import '../../css/l/ldrivdbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lw5nmrbbq"/><path class="ldrivdbwg"/></g>`,
		"fallback": "streamline-freehand-color:disability-braille",
	});
}

export default Component;
