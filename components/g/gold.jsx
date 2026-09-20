import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/ig2ey3bqd.css';
import '../../css/l/le4z27b5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ig2ey3bqd"/><path class="le4z27b5i"/></g>`,
		"fallback": "streamline-sharp-color:gold",
	});
}

export default Component;
