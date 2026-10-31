import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yo0c7gboq.css';
import '../../css/h/hwyqdfbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yo0c7gboq"/><path class="hwyqdfbnl"/></g>`,
		"fallback": "coolicons:cpu-sparkle-bulk-round",
	});
}

export default Component;
