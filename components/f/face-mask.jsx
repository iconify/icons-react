import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bibpy9bpq.css';
import '../../css/r/rs77v00pn.css';
import '../../css/i/i5ws0vb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bibpy9bpq"/><path class="rs77v00pn"/><path class="i5ws0vb4s"/></g>`,
		"fallback": "withicons-bauhaus:face-mask",
	});
}

export default Component;
