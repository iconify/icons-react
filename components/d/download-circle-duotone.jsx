import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l_3txeeom.css';
import '../../css/g/gg7zpivau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="matrix(0 -1 -1 0 18 20)" class="l_3txeeom"/><path class="gg7zpivau"/></g>`,
		"fallback": "lets-icons:download-circle-duotone",
	});
}

export default Component;
