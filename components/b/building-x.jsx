import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_beebviz.css';
import '../../css/y/ylrp20bva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z_beebviz"/><path class="ylrp20bva"/></g>`,
		"fallback": "bi:building-x",
	});
}

export default Component;
