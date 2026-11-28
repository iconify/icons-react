import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mzhlhi47b.css';
import '../../css/m/m8cg0rb7a.css';
import '../../css/s/sbba9kb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mzhlhi47b"/><path class="m8cg0rb7a"/><path class="sbba9kb4d"/></g>`,
		"fallback": "iconaut:code-xml",
	});
}

export default Component;
