import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/i/i7n0v-d0q.css';
import '../../css/q/q9ez6ybik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="i7n0v-d0q"/><path class="q9ez6ybik"/></g>`,
		"fallback": "streamline-sharp-color:arrow-cursor-1",
	});
}

export default Component;
