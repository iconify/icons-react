import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/f/fic0nbbdl.css';
import '../../css/e/eieh3wbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="l4--ovbba"/><path class="fic0nbbdl"/><path class="eieh3wbdl"/></g>`,
		"fallback": "iconaut:badge-russian-ruble",
	});
}

export default Component;
