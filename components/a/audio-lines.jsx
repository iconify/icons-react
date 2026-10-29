import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w74_pkbuu.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/o/om2raabrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w74_pkbuu wm-a"/><path class="xye5qqb6j"/><path class="om2raabrv wm-a"/></g>`,
		"fallback": "withicons:audio-lines",
	});
}

export default Component;
