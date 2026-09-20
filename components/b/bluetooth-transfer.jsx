import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g6ih37yah.css';
import '../../css/l/l_0k0c9pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g6ih37yah"/><path class="l_0k0c9pq"/></g>`,
		"fallback": "streamline-freehand-color:bluetooth-transfer",
	});
}

export default Component;
