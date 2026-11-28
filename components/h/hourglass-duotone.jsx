import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi5-h8nqg.css';
import '../../css/v/vicc7tlux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zi5-h8nqg"/><path class="primary vicc7tlux"/></g>`,
		"fallback": "iconaut:hourglass-duotone",
	});
}

export default Component;
