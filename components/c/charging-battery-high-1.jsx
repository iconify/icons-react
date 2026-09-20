import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmi-wct6x.css';
import '../../css/u/u3a5ucg5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmi-wct6x"/><path class="u3a5ucg5z"/></g>`,
		"fallback": "streamline-freehand-color:charging-battery-high-1",
	});
}

export default Component;
