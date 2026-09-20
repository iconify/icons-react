import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d96fi3nqy.css';
import '../../css/q/qb1qpnm5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d96fi3nqy"/><path class="qb1qpnm5t"/></g>`,
		"fallback": "streamline-freehand-color:face-id-square",
	});
}

export default Component;
