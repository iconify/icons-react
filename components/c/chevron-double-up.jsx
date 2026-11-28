import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pqo1nxbjw.css';
import '../../css/c/c6cpgtb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pqo1nxbjw"/><path class="c6cpgtb3a"/></g>`,
		"fallback": "iconaut:chevron-double-up",
	});
}

export default Component;
