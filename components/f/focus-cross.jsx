import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pl26-1bwp.css';
import '../../css/i/ifj4j2mcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pl26-1bwp"/><path class="ifj4j2mcp"/></g>`,
		"fallback": "streamline-freehand-color:focus-cross",
	});
}

export default Component;
