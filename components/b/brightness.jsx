import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wf49do70h.css';
import '../../css/q/qt3q0d06l.css';
import '../../css/k/k149fq8mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wf49do70h"/><path class="qt3q0d06l"/><path class="k149fq8mf"/></g>`,
		"fallback": "iconoir:brightness",
	});
}

export default Component;
