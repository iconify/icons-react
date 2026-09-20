import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bsfg6lbji.css';
import '../../css/a/au9rkbbkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bsfg6lbji"/><path class="au9rkbbkm"/></g>`,
		"fallback": "streamline-sharp-color:chess-knight",
	});
}

export default Component;
