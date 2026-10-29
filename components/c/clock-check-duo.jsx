import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ki9nxfqhe.css';
import '../../css/l/lf-b92d3v.css';
import '../../css/f/fuyz5hbco.css';
import '../../css/f/f78e21b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ki9nxfqhe"/><path class="lf-b92d3v wm-s"/><path class="fuyz5hbco"/><path class="f78e21b0t wm-a"/></g>`,
		"fallback": "withicons:clock-check-duo",
	});
}

export default Component;
