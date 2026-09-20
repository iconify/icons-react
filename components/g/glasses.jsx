import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wg62rr5oq.css';
import '../../css/w/w1g1irjfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wg62rr5oq"/><path class="w1g1irjfp"/></g>`,
		"fallback": "streamline-sharp-color:glasses",
	});
}

export default Component;
