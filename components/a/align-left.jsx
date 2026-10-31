import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m96f6qbnd.css';
import '../../css/i/i9fl8kbvz.css';
import '../../css/p/p41ig8b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="m96f6qbnd wm-shadow"/><path class="i9fl8kbvz wm-shadow"/><path class="p41ig8b8l"/></g>`,
		"fallback": "withicons-brutal:align-left",
	});
}

export default Component;
