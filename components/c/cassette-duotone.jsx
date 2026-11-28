import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ia_2cacyf.css';
import '../../css/z/zm542_p_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ia_2cacyf secondary"/><path class="primary zm542_p_c"/></g>`,
		"fallback": "iconaut:cassette-duotone",
	});
}

export default Component;
