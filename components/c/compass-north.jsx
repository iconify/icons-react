import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkto9v54u.css';
import '../../css/u/u86m9ab3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkto9v54u"/><path class="u86m9ab3e"/></g>`,
		"fallback": "lets-icons:compass-north",
	});
}

export default Component;
