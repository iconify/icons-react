import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/b91ogbb3q.css';
import '../../css/g/g7lvh9b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="b91ogbb3q"/><path class="g7lvh9b1t"/></g>`,
		"fallback": "streamline-sharp-color:forward-email",
	});
}

export default Component;
