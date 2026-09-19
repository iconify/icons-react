import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w74otaclj.css';
import '../../css/z/z4d_nqbec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w74otaclj"/><path class="z4d_nqbec"/></g>`,
		"fallback": "healthicons:hiv-ind",
	});
}

export default Component;
