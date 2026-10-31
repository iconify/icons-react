import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nbknfmbgh.css';
import '../../css/i/iqoyu2gvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nbknfmbgh"/><path class="iqoyu2gvs"/></g>`,
		"fallback": "withicons-retro:binary",
	});
}

export default Component;
