import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tro4qhbhl.css';
import '../../css/n/n2454t_7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tro4qhbhl"/><path class="n2454t_7w"/></g>`,
		"fallback": "lets-icons:box-alt-fill-duotone",
	});
}

export default Component;
