import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t8ir5j57n.css';
import '../../css/v/vm3e4ebcu.css';
import '../../css/t/t2yjsqb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t8ir5j57n"/><path class="vm3e4ebcu"/><path class="t2yjsqb-b"/></g>`,
		"fallback": "streamline-freehand-color:business-cash-eye",
	});
}

export default Component;
