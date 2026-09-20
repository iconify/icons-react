import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy_e0ew7w.css';
import '../../css/f/fc14hnevg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dy_e0ew7w"/><path class="fc14hnevg"/></g>`,
		"fallback": "streamline-ultimate-color:delete",
	});
}

export default Component;
