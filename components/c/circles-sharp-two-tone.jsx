import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/ci0eggbhi.css';
import '../../css/w/w32gfz6zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="ci0eggbhi"/><path class="w32gfz6zt"/></g>`,
		"fallback": "keyline-icons:circles-sharp-two-tone",
	});
}

export default Component;
