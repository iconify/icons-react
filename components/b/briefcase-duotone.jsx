import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2-9wig_g.css';
import '../../css/p/p1qq2rbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2-9wig_g"/><path class="p1qq2rbrr"/></g>`,
		"fallback": "si:briefcase-duotone",
	});
}

export default Component;
