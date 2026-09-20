import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/w4oy5wz1g.css';
import '../../css/d/dyg7-lk5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="w4oy5wz1g"/><path class="dyg7-lk5k"/></g>`,
		"fallback": "streamline-sharp-color:filter-2",
	});
}

export default Component;
