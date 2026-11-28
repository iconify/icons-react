import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0f0epwqt.css';
import '../../css/g/gmqffruof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w0f0epwqt"/><path class="gmqffruof primary"/></g>`,
		"fallback": "iconaut:check-circle-sparkles-duotone",
	});
}

export default Component;
