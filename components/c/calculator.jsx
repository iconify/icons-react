import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l7umh3bwe.css';
import '../../css/n/nj6yhupln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l7umh3bwe"/><path class="nj6yhupln wm-a"/></g>`,
		"fallback": "withicons:calculator",
	});
}

export default Component;
