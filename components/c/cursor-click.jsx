import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/e/el79s-2uy.css';
import '../../css/d/dmh-b0bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="el79s-2uy"/><path class="dmh-b0bva"/></g>`,
		"fallback": "streamline-sharp-color:cursor-click",
	});
}

export default Component;
