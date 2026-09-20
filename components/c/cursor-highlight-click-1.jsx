import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ch-1b-b9p.css';
import '../../css/y/y6t8zprrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ch-1b-b9p"/><path class="y6t8zprrp"/></g>`,
		"fallback": "streamline-freehand-color:cursor-highlight-click-1",
	});
}

export default Component;
