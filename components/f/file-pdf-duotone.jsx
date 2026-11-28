import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3f-99w6a.css';
import '../../css/q/qqoovb_jz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary w3f-99w6a"/><path class="primary qqoovb_jz"/></g>`,
		"fallback": "iconaut:file-pdf-duotone",
	});
}

export default Component;
