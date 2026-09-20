import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fg1aih2od.css';
import '../../css/z/z7fmprfjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fg1aih2od"/><path class="z7fmprfjl"/></g>`,
		"fallback": "streamline-freehand-color:disability-wheelchair-way",
	});
}

export default Component;
