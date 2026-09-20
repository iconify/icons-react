import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bjg6pjb6n.css';
import '../../css/h/h2-urib6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bjg6pjb6n"/><path class="h2-urib6x"/></g>`,
		"fallback": "lets-icons:chield-check-duotone",
	});
}

export default Component;
