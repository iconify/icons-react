import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/johrmpb-w.css';
import '../../css/u/u9_8ejboz.css';
import '../../css/t/t1sibyunk.css';
import '../../css/h/h_djk-b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="johrmpb-w"/><path class="u9_8ejboz"/><path class="t1sibyunk"/><path class="h_djk-b1c"/></g>`,
		"fallback": "iconaut:gauge-circle",
	});
}

export default Component;
