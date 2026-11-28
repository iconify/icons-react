import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwtszt-5s.css';
import '../../css/f/fax6xtb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cwtszt-5s secondary"/><path class="fax6xtb1t primary"/></g>`,
		"fallback": "iconaut:heart-plus-duotone",
	});
}

export default Component;
