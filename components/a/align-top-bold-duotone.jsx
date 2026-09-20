import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/we0hzzv_p.css';
import '../../css/u/u10o49kya.css';
import '../../css/p/pciyzuy3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="we0hzzv_p"/><path class="u10o49kya"/><path clip-rule="evenodd" class="pciyzuy3j"/></g>`,
		"fallback": "solar:align-top-bold-duotone",
	});
}

export default Component;
