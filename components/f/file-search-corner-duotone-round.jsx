import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/idmiw5bzg.css';
import '../../css/z/zdgm1govw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="idmiw5bzg"/><path class="zdgm1govw"/></g>`,
		"fallback": "coolicons:file-search-corner-duotone-round",
	});
}

export default Component;
