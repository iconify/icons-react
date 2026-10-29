import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';
import '../../css/l/lf-b92d3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fuyz5hbco"/><path class="f78e21b0t wm-a"/><path class="lf-b92d3v wm-s"/></g>`,
		"fallback": "withicons:clock-check",
	});
}

export default Component;
