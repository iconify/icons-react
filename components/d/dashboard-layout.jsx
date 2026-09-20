import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g7s47ze6b.css';
import '../../css/b/bjmw4947t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g7s47ze6b"/><path class="bjmw4947t"/></g>`,
		"fallback": "streamline-freehand-color:dashboard-layout",
	});
}

export default Component;
