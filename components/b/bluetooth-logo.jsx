import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l7gw9hb1e.css';
import '../../css/q/ql89shdny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l7gw9hb1e"/><path class="ql89shdny"/></g>`,
		"fallback": "streamline-freehand-color:bluetooth-logo",
	});
}

export default Component;
