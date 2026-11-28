import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bi6wg0fto.css';
import '../../css/v/vt259-bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bi6wg0fto secondary"/><path class="primary vt259-bpk"/></g>`,
		"fallback": "iconaut:gauge-alert-duotone",
	});
}

export default Component;
