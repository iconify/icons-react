import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0olb3r3p.css';
import '../../css/s/s1fibgmex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0olb3r3p secondary"/><path class="primary s1fibgmex"/></g>`,
		"fallback": "iconaut:fish-duotone",
	});
}

export default Component;
