import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmwvl2bna.css';
import '../../css/c/cbxvpmodz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmwvl2bna secondary"/><path class="cbxvpmodz primary"/></g>`,
		"fallback": "iconaut:building-duotone",
	});
}

export default Component;
